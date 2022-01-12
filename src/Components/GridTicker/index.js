import { Table } from "react-bootstrap";

function GridTicker() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Ticker</th>
                    <th>Cotação Atual</th>
                    <th>Cotação Anterior</th>
                    <th>Variação</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>VALE3</td>
                    <td>84,00</td>
                    <td>88,00</td>
                    <td>5,0 %</td>
                    <td>Queda</td>
                </tr>
                <tr>
                    <td>PETR4</td>
                    <td>30,00</td>
                    <td>27,00</td>
                    <td>10,0 %</td>
                    <td>Alta</td>
                </tr>
                <tr>
                    <td>BBDC4</td>
                    <td>30,00</td>
                    <td>27,00</td>
                    <td>10,0 %</td>
                    <td>Alta</td>
                </tr>
                <tr>
                    <td>BBAS3</td>
                    <td>30,00</td>
                    <td>27,00</td>
                    <td>10,0 %</td>
                    <td>Alta</td>
                </tr>
                <tr>
                    <td>GOLL4</td>
                    <td>30,00</td>
                    <td>27,00</td>
                    <td>10,0 %</td>
                    <td>Alta</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default GridTicker