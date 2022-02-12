import { Card } from "react-bootstrap"

function CardTicker({acao, onClickDelete}) {    
    return (
        <Card as='article' className="text-center shadow card-tickers">
            <Card.Body>
                <Card.Title>{acao.codigo}</Card.Title>
                <Card.Text>{acao.custo}</Card.Text>
                <i onClick={onClickDelete} className="far fa-trash-alt fa-2x button-icons"></i>
            </Card.Body>
        </Card>
    )
}

export default CardTicker
