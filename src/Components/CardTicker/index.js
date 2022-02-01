import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function CardTicker() {
    return (
        <Card as='article' className="text-center shadow card-tickers">
            <Card.Body>
                <Card.Title>VALE3</Card.Title>
                <Card.Text>R$ 90,00</Card.Text>
                <Link to={'/'}><i className="far fa-trash-alt fa-2x button-icons"></i></Link>
            </Card.Body>
        </Card>
    )
}

export default CardTicker
