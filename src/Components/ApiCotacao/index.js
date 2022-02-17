import { useEffect, useState } from "react";
import { getPriceByTicker } from "../../Services/AlphaVantage.service";
import { getTickerByCodigo, patchTicker } from "../../Services/Tickers.service";

export function DataOntem() {
  var hoje = new Date()
  var dia = String(hoje.getDate() -1).padStart(2, '0')
  var mes = String(hoje.getMonth() + 1).padStart(2, '0')
  var ano = hoje.getFullYear()
  var dataOntem = ano + '-' + mes + '-' + dia
  return dataOntem
}

export function DataHoje() {
  var hoje = new Date()
  var dia = String(hoje.getDate()).padStart(2, '0')
  var mes = String(hoje.getMonth() + 1).padStart(2, '0')
  var ano = hoje.getFullYear()
  var dataHoje = ano + '-' + mes + '-' + dia
  return dataHoje
}

export function DiaSemanaHoje() {
  var hoje = new Date()
  var dia = String(hoje.getDate()).padStart(2, '0')
  var mes = String(hoje.getMonth() + 1).padStart(2, '0')
  var ano = hoje.getFullYear()  
  var diaSemana = (new Date(ano,mes,dia)).getDay()
  return diaSemana
}

export function ApiCotacao({tickerCode}) { 
  const [cotacao, setCotacao] = useState('');  
  var valorFechamento=0  
  const dataHoje = DataHoje()  
  const diaSemanaHoje = DiaSemanaHoje()
  //Consultar o DB.JSON e ver se já tem valor de fechamento na data de ontem
  async function isFechamentoAnterior() {
    const ticker = await getTickerByCodigo(tickerCode) 
    if (ticker.dataFechamento === dataHoje) {
        setCotacao(ticker.valorFechamento)        
    } else {       
      if (diaSemanaHoje===0 || diaSemanaHoje===6) {
        //Atualizar a data do fechamento
        const body = {
          dataFechamento: dataHoje
        }
        await patchTicker(body, ticker.id)
      } else {
        try{
          const newCotacao = await getPriceByTicker(tickerCode)         
          const newFechamento = String(newCotacao['Time Series (Daily)'][dataHoje]['4. close'])
          valorFechamento = newFechamento
          const body = { 
            valorFechamento: valorFechamento,
            dataFechamento: dataHoje
          }
        await patchTicker(body, ticker.id)
        }catch{
          setCotacao(ticker.valorFechamento)
        }       
      }      
    }
  }
  useEffect(()=>{
    isFechamentoAnterior()
  },[])
  
  return (
    <strong>{parseFloat(cotacao).toFixed(2)}</strong>
  )
}