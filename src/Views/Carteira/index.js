import { useEffect, useState } from "react";
import { Alert, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { getCarteiras } from "../../Services/Carteiras.service";

function Carteira() {
    const[carteira, setCarteira] = useState([])
    const[generalError, setGeneralError] = useState()
    useEffect( async ()=>{
        try{
            const data = await getCarteiras()  
            setCarteira(data)
        } catch (error) {
            setGeneralError(error)
        }
    },[])
    return (
        <Layout>
        <Container fluid>
            <h1>Carteiras</h1>
            <div className="search">
                <div><input type="text" className="input-form"/></div>
                <div><i className="fas fa-plus-square fa-2x button-icons"></i></div>
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
                                    <td><i className="far fa-trash-alt fa-2x button-icons"></i></td>
                                </tr>
                            ))
                        )}    
                    </tbody>
                </Table>
            </div>
        </Container>
      </Layout>
        
    )
}

export default Carteira


