import { useEffect, useState } from "react";
import { Alert, Container, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../Components/Layout";
import { ModalConfirm } from "../../Components/ModalConfirm";
import { getCarteiras, postCarteira, deleteCarteira } from "../../Services/Carteiras.service";

function Carteira() {
    const[carteira, setCarteira] = useState([])
    const[nameCarteira, setNameCarteira] = useState('')
    const[generalError, setGeneralError] = useState()
    const [carteiraToDelete, setCarteiraToDelete] = useState()

    const addCarteira = async () => {
        await postCarteira({ "nome": nameCarteira})
        toast.success('Carteira cadastrada com sucesso.')
        fetchData()
    }

    const delCarteira = async () => {      
        await deleteCarteira(carteiraToDelete)
        toast.success('Carteira excluída com sucesso.')
        closeModal()
        fetchData()
    }
    
    const handleChange = (event) => {
        const newData = event.target.value
        setNameCarteira(newData)
    }
    const fetchData = async() => {
        try{
            const data = await getCarteiras()  
            setCarteira(data)
        } catch (error) {
            setGeneralError(error)
        }
    }
    useEffect( async ()=>{
        fetchData() 
    },[])
    const openModal = (id) => {    
        setCarteiraToDelete(id)
      }
      const closeModal = () => {    
        setCarteiraToDelete(undefined)
      }
    
    return (
        <Layout>
        <Container fluid>
            <h1>Carteiras</h1>
            <div className="search">
                <div>
                    <input 
                        type="text" 
                        className="input-form" 
                        name="nameCarteira"
                        value={nameCarteira}
                        onChange={handleChange}
                    />
                </div>
                <div><i onClick={addCarteira} className="fas fa-plus-square fa-2x button-icons"></i></div>
            </div>
            <div className="crud-table">
                <Table>
                    <tbody>
                        {generalError ? (
                            <Alert variant="danger">Carteira vazia</Alert>
                        ) : (
                            carteira.map((item) => (
                                <tr key={item.id}>
                                    <td><p>{item.nome}</p></td>
                                    <td><Link to={`/tickers/${item.id}`}><i className="far fa-edit fa-2x button-icons"></i></Link></td>
                                    <td>
                                        <i onClick={() => {openModal(item.id)}} className="far fa-trash-alt fa-2x button-icons"></i>
                                    </td>
                                </tr>
                            ))
                        )}    
                    </tbody>
                </Table>
            </div>
            <ModalConfirm show={!!carteiraToDelete} 
                onConfirm={delCarteira} 
                onHide={closeModal}
                title='Confirmação de Exclusão'
                content={<p>Você confirma que quer excluir essa carteira ?</p>}
                cancelLabel='Cancelar'
                confirmLabel='Excluir'
                />
        </Container>
      </Layout>
        
    )
}

export default Carteira


