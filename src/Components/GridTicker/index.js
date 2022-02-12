import { useCallback, useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { getCarteirasWithTickers } from "../../Services/Carteiras.service";

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
                                <td>30,00</td>
                                <td>{ticker.custo}</td>
                                <td>10,0 %</td>
                                <td>Alta</td>
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



            
            
    
