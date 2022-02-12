import { useCallback, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { getCarteirasWithTickers } from "../../Services/Carteiras.service";
import ApiCotacao from "../ApiCotacao";

function GridTicker() {        
    const [carteiras, setCarteiras]= useState([])
    const fetchCarteirasWithTickers = useCallback(
        async ()=>{
            const data = await getCarteirasWithTickers()
            setCarteiras(data)
        }, []
    )

    useEffect(()=>{
        fetchCarteirasWithTickers()
    },[fetchCarteirasWithTickers])
        
    return (
        <>
           {carteiras.map((carteira, indexCarteira) => (
                <div key={indexCarteira}>
                    <h1>Carteira {carteira.nome}</h1>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Ticker</th>
                            <th>Cotação Atual</th>
                            <th>Custo Médio</th>
                            <th>Variação</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carteira.tickers.map((ticker, indexTicker) => (
                            <tr key={indexTicker}>
                                <td>{ticker.codigo}</td>
                                <td>
                                    <ApiCotacao tickerCode={ticker.codigo}/>
                                </td>
                                <td>{ticker.custo}</td>
                                <td>{((1-(ticker.custo/ticker.valorFechamento))*100).toLocaleString('pt-BR')} %</td>
                                <td>{1-(ticker.custo/ticker.valorFechamento)>=0 ? 'Alta' : 'Baixa'}</td>
                            </tr>)    
                        )}
                    </tbody>
                    </Table>
                </div>)
           )}       
        </>
    )
}        

export default GridTicker



            
            
    
