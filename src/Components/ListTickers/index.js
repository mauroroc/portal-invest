import { Col, Row } from "react-bootstrap";
import CardTicker from "../../Components/CardTicker";

function ListTickers({ items, delTicker }) {
  return (
    <>
      {items.tickers.map((item, index) => 
       (
          <Row key={index}>
              <Col><CardTicker acao={item} onClickDelete={() => delTicker(item.id)} /></Col>
          </Row>
        )
      )}
    </>
  )
}

export default ListTickers