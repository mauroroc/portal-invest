import { Col, Row } from "react-bootstrap";
import CardTicker from "../../Components/CardTicker";

function ListTickers({ items }) {
  return (
    <>
      {items.tickers.map((item, index) => 
       (
          <Row key={index}>
              <Col ><CardTicker acao={item} /></Col>
          </Row>
        )
      )}
    </>
  )
}

export default ListTickers