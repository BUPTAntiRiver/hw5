import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function BadgerBudSaved(props) { 
    const adopt = () => {
        const adoptedCatIds = JSON.parse(sessionStorage.getItem('adoptedCatIds'));
        const updatedCatIds = JSON.parse(sessionStorage.getItem('savedCatIds')).filter(
            id => {return id !== props.id && !adoptedCatIds.includes(id)}
        );
        
        adoptedCatIds.push(props.id);
        sessionStorage.setItem('savedCatIds', JSON.stringify(updatedCatIds));
        sessionStorage.setItem('adoptedCatIds', JSON.stringify(adoptedCatIds));
        alert(props.name + ' has been adopted!'); 
        props.setRerender(!props.rerender);
    }

    const unselect = () => {
        const updatedCatIds = JSON.parse(sessionStorage.getItem('savedCatIds')).filter(
            id => {return id !== props.id}
        );
        sessionStorage.setItem('savedCatIds', JSON.stringify(updatedCatIds));        
        alert(props.name + ' has been removed from your basket!');
        props.setRerender(!props.rerender);
    }


    const imgSrc = 'https://raw.githubusercontent.com/CS571-S25/hw5-api-static-content/main/cats/' + props.imgIds[0];
    return <Card>
        <img src={imgSrc} alt={props.name} style={{ width: 'auto', height: '400px'}} />
        <h3>{props.name}</h3> 
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button variant='secondary' onClick={() => unselect()}>Unselect</Button>
            <Button variant='success' onClick={() => adopt()}>❤️ Adopt</Button>
        </div>
    </Card>
}