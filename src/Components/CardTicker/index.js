import { Card } from "react-bootstrap"

function CardTicker({acao}) {
    return (
        <Card as='article' className="text-center shadow card-tickers">
            <Card.Body>
                <Card.Title>{acao.codigo}</Card.Title>
                <Card.Text>{acao.custo}</Card.Text>
                <i className="far fa-trash-alt fa-2x button-icons"></i>
            </Card.Body>
        </Card>
    )
}

export default CardTicker
