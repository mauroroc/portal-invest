import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout";
import ListTickers from "../../Components/ListTickers";
import { getCarteirasById } from "../../Services/Carteiras.service";
import { deleteTicker, postTicker } from "../../Services/Tickers.service";

const initialValue = {
    name: '',
    cost: 0
}

function Tickers() {
    const { id } = useParams()
    const [carteira, setCarteira] = useState()    
    const[ticker, setTicker] = useState('')
    const fetchCarteira = useCallback(
        async() => {
            try {
                const data = await getCarteirasById(id)                
                setCarteira(data)                
            } catch (error) {                
                console.log('Erro')                
            }
        }, [id]
    )
    
    const handleChange = (event) => {
        const newTicker = {
            ...ticker
        }
        newTicker[event.target.name] = event.target.value
        setTicker(newTicker)
    }

    const addTicker = async () => {
        const body = { 
            ...ticker,
            carteiraId: parseInt(id)
        }
        await postTicker(body)
        setTicker(initialValue)
        fetchCarteira()
    }

    const delTicker = async (id) => {      
        await deleteTicker(id)
        fetchCarteira()
    }

    useEffect(()=>{
        fetchCarteira() 
    },[fetchCarteira])
    return (
        <Layout>
        <Container fluid>
            {carteira ? (
                <>
                    <h1>{carteira.nome}</h1>
                    <div className="add-ticker">
                        <label>Código: </label>
                        <input 
                            type="text" 
                            name="codigo" 
                            className="input-form"
                            value={ticker.name}
                            onChange={handleChange}
                        />
                        <label>Valor: </label>
                        <input 
                            type="number" 
                            name="custo" 
                            className="input-form"
                            value={ticker.cost}
                            onChange={handleChange}
                        />
                        <i onClick={addTicker} className="fas fa-plus-square fa-2x button-icons"></i>
                    </div>
                    <div className="cards">
                        <ListTickers items={carteira} delTicker={delTicker} />                                              
                    </div>
                </>
            ) : (                
                ''
            )}
            
        </Container>
      </Layout>
        
    )
}

export default Tickers


