import { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../Components/Layout";
import ListTickers from "../../Components/ListTickers";
import { ModalConfirm } from "../../Components/ModalConfirm";
import { getCarteirasById } from "../../Services/Carteiras.service";
import { deleteTicker, postTicker } from "../../Services/Tickers.service";

function Tickers() {
    const { id } = useParams()
    const [carteira, setCarteira] = useState()    
    const[ticker, setTicker] = useState({})
    const [tickerToDelete, setTickerToDelete] = useState()
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
        const {value, name} = event.target
        setTicker({
            ...ticker,
            [name]: value
        }) 
    }

    const addTicker = async () => {
        const body = { 
            ...ticker,
            carteiraId: parseInt(id)
        }
        await postTicker(body)
        toast.success('Ação cadastrada com sucesso.')
        setTicker({})
        fetchCarteira()
    }

    const delTicker = async () => {      
        await deleteTicker(tickerToDelete)
        toast.success('Ação excluída com sucesso.')
        closeModal()
        fetchCarteira()
    }

    useEffect(()=>{
        fetchCarteira() 
    },[fetchCarteira])

    const openModal = (id) => {    
        setTickerToDelete(id)
      }
      const closeModal = () => {    
        setTickerToDelete(undefined)
      }

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
                            value={ticker.codigo || ''}
                            onChange={handleChange}
                        />
                        <label>Valor: </label>
                        <input 
                            type="number" 
                            name="custo" 
                            className="input-form"
                            value={ticker.custo || ''}
                            onChange={handleChange}
                        />
                        <i onClick={addTicker} className="fas fa-plus-square fa-2x button-icons"></i>
                    </div>
                    <div className="cards">
                        <ListTickers items={carteira} delTicker={openModal} />                                              
                    </div>
                </>
            ) : (                
                ''
            )}
            <ModalConfirm show={!!tickerToDelete} 
                onConfirm={delTicker} 
                onHide={closeModal}
                title='Confirmação de Exclusão'
                content={<p>Você confirma que quer excluir essa ação ?</p>}
                cancelLabel='Cancelar'
                confirmLabel='Excluir'
                />
        </Container>
      </Layout>
        
    )
}

export default Tickers


