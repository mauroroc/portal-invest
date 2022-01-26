import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";

function Carteira() {
    return (
        <Layout>
        <Container fluid>
            <h1>Carteiras</h1>
            <div className="search">
                <div><input type="text" className="input-form"/></div>
                <div><i class="fas fa-plus-square fa-2x button-icons"></i></div>
            </div>
            <div className="crud-table">
                <Table>
                    <tbody>
                        <tr>
                            <td><p>Carteira ABC</p></td>
                            <td><Link to="/tickers"><i class="far fa-edit fa-2x button-icons"></i></Link></td>
                            <td><i class="far fa-trash-alt fa-2x button-icons"></i></td>
                        </tr>
                        <tr>
                            <td><p>Carteira XYZ</p></td>
                            <td><Link to="/tickers"><i class="far fa-edit fa-2x button-icons"></i></Link></td>
                            <td><i class="far fa-trash-alt fa-2x button-icons"></i></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Container>
      </Layout>
        
    )
}

export default Carteira


