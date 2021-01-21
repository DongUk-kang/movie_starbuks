import React from 'react';
import {Button, Card} from "react-bootstrap";

const TrendCardView = ({overview, poster, name}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster}`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {overview.substring(0, 120)}...
                </Card.Text>
                <Button variant="success">Success</Button>
            </Card.Body>
        </Card>


    );
};

export default TrendCardView;
