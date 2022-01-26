import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardTicker from "../../Components/CardTicker";
import Layout from "../../Components/Layout";

function Tickers() {
    return (
        <Layout>
        <Container fluid>
            <h1>Carteira ABC</h1>
            <div className="add-ticker">
                <input type="text" name="codigo" className="input-form"/>
                <input type="text" name="preco" className="input-form"/>
                <i class="fas fa-plus-square fa-2x button-icons"></i>
            </div>
            <div className="cards">
                <CardTicker />
                <CardTicker />
                <CardTicker />
                <CardTicker />
            </div>
        </Container>
      </Layout>
        
    )
}

export default Tickers


