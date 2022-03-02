import React, {useEffect, useState} from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import SportListItem from "../../components/SportListItem";
import {listSports} from "../../client/SportClient";

export default function ListSports() {
    const [sports, setSports] = useState([]);

    useEffect(() => {
        listSports().then(data => {
            setSports(data);
        });
    }, []);

    return (
        <Container>
            <Row className="my-2">
                <Col className="col-9">
                    <h1>Sports</h1>
                </Col>
                <Col className="col-3">
                    <Button variant="primary" href="sports/create">Add sport</Button>
                </Col>
            </Row>
            <ListGroup variant="flush">
                {sports.map((sport) => <SportListItem key={sport.id} sport={sport}/>)}
            </ListGroup>
        </Container>
    );
}