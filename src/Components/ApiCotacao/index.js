import { useEffect, useState } from "react";
import { getPriceByTicker } from "../../Services/AlphaVantage.service";
import { getTickerByCodigo, patchTicker } from "../../Services/Tickers.service";

function ApiCotacao({tickerCode}) { 
  const [cotacao, setCotacao] = useState('');  
  var valorFechamento=0

  //Encontrar a data de ontem
  var hoje = new Date()
  var dia = String(hoje.getDate() -1).padStart(2, '0')
  var mes = String(hoje.getMonth() + 1).padStart(2, '0')
  var ano = hoje.getFullYear()
  var dataOntem = ano + '-' + mes + '-' + dia

  //Consultar o DB.JSON e ver se já tem valor de fechamento na data de ontem
  async function isFechamentoAnterior() {
    const ticker = await getTickerByCodigo(tickerCode)    
    if (ticker.dataFechamento === dataOntem) {
        setCotacao(ticker.valorFechamento)        
    } else { 
      const newCotacao = await getPriceByTicker(tickerCode)
      const newFechamento = String(newCotacao['Time Series (Daily)'][dataOntem]['4. close'])
      valorFechamento = newFechamento
      const body = { 
          valorFechamento: valorFechamento,
          dataFechamento: dataOntem
      }
      await patchTicker(body, ticker.id)
    }
  }
  useEffect(()=>{
    isFechamentoAnterior()
  },[])
  
  return (
    <strong>{cotacao}</strong>
  )
}

export default ApiCotacao