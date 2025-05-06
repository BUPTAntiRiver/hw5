import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext"
import { useContext, useState } from "react"
import BadgerBudSaved from "../../BadgerBudSaved"
import { Col, Row, Table } from "react-bootstrap"

export default function BadgerBudsBasket(props) {
    const data = useContext(BadgerBudsDataContext).filter(
        cat => {return JSON.parse(sessionStorage.getItem('savedCatIds')).includes(cat.id) === true}
    )
    const [rerender, setRerender] = useState(false);
    const isEmpty = !data.length;
    return <div>
        <h1>Badger Buds Basket</h1>
        <p>These cute cats could be all yours!</p>  
        {isEmpty ? <div><p>You have no buds in your basket!</p></div> :
        <Row> 
        {
            data.map(cat => {
                return <Col key={cat.id} xs={12} sm={12} md={6} lg={4} xl={3}><BadgerBudSaved {...cat} rerender={rerender} setRerender={setRerender} /></Col>
            })
        }
        </Row>}
    </div>
}