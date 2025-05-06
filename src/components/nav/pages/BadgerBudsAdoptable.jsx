import { useContext } from "react"
import BadgerBudsDataContext from "../../../contexts/BadgerBudsDataContext"
import BadgerBudSummary from "../../BadgerBudSummary"
import { Col, Row, Table } from "react-bootstrap"
import { useState } from "react"

export default function BadgerBudsAdoptable(props) {
    const data = useContext(BadgerBudsDataContext).filter(
        cat => {return JSON.parse(sessionStorage.getItem('savedCatIds')).includes(cat.id) === false
            && JSON.parse(sessionStorage.getItem('adoptedCatIds')).includes(cat.id) === false
        }
    )
    const [rerender, setRerender] = useState(false);
    const isEmpty = !data.length;

    return <div>
            <h1>Available Badger Buds</h1>
            <p>The following cats are looking for a loving home! Could you help?</p>
            {isEmpty ? <div><p>No buds are available for adoption!</p></div> :
            <Row>
            {
                data.map(cat => {
                    return <Col key={cat.id} xs={12} sm={12} md={6} lg={4} xl={3}><BadgerBudSummary {...cat} rerender={rerender} setRerender={setRerender}></BadgerBudSummary></Col>
                })
            }
            </Row>} 
        </div>
}