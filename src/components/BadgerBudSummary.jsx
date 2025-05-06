import { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function BadgerBudSummary(props) {
    const saveCat = () => {
        const savedCatIds = JSON.parse(sessionStorage.getItem('savedCatIds'));
        if(!savedCatIds.includes(props.id)) {
            props.setRerender(!props.rerender);
            savedCatIds.push(props.id);
            sessionStorage.setItem('savedCatIds', JSON.stringify(savedCatIds));
            alert(props.name + ' has been added to your basket!');
        } 
    }

    const [isShow, setIsShow] = useState(false);
    const imgSrc = 'https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/';
    return <Card>
        {isShow ? 
        <Carousel>
            {props.imgIds.map((imgId, index) => {
                return <Carousel.Item key={index}>
                    <img src={imgSrc + imgId} alt={props.name + index} style={{ width: 'auto', height: '400px'}} />
                </Carousel.Item>
            })}
        </Carousel>
        : <img src={imgSrc + props.imgIds[0]} alt={props.name} style={{ width: 'auto', height: '400px'}} />}
        <h3>{props.name}</h3>
        {isShow ? <div>
            <p>{props.gender}</p>
            <p>{props.breed}</p>
            <p>{props.age}</p>
            <p>{props.description}</p>
            </div> : null}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant='primary' onClick={() => setIsShow(!isShow)}>{isShow ? 'Show Less' : 'Show More'}</Button>
            <Button variant='secondary' onClick={() => saveCat()}>❤️ Save</Button>
        </div>
    </Card>
}