import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout";
import ListTickers from "../../Components/ListTickers";
import { getCarteirasById } from "../../Services/Carteiras.service";

function Tickers() {
    const { id } = useParams()
    const [carteira, setCarteira] = useState()
    const[generalError, setGeneralError] = useState()
    const fetchCarteira = useCallback(
        async() => {
            try {
                const data = await getCarteirasById(id)                
                setCarteira(data)                
            } catch (error) {                
                setGeneralError(error)
            }
        }, [id]
    )
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
                        <input type="text" name="codigo" className="input-form"/>
                        <input type="text" name="preco" className="input-form"/>
                        <i className="fas fa-plus-square fa-2x button-icons"></i>
                    </div>
                    <div className="cards">
                        <ListTickers items={carteira} />                                              
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


