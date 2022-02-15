import { Card } from "react-bootstrap"
import { ApiCotacao } from "../ApiCotacao"

function CardTicker({acao, onClickDelete}) {    
    return (
        <Card as='article' className="text-center shadow card-tickers">
            <Card.Body>
                <Card.Title>{acao.codigo}</Card.Title>
                <Card.Text>Custo: {parseFloat(acao.custo).toFixed(2)}</Card.Text>
                <Card.Text>Cotação: <ApiCotacao tickerCode={acao.codigo}/></Card.Text>
                <i onClick={onClickDelete} className="far fa-trash-alt fa-2x button-icons"></i>
            </Card.Body>
        </Card>
    )
}

export default CardTicker
