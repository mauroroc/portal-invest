import { Col, Container, Row } from "react-bootstrap";
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
                <i className="fas fa-plus-square fa-2x button-icons"></i>
            </div>
            <div className="cards">
                <Row>
                    <Col><CardTicker /></Col>
                    <Col><CardTicker /></Col>
                </Row>
                <Row>
                    <Col><CardTicker /></Col>
                    <Col><CardTicker /></Col>
                </Row>
            </div>
        </Container>
      </Layout>
        
    )
}

export default Tickers


