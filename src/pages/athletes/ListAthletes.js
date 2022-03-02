import React, {useEffect, useState} from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import AthleteListItem from "../../components/AthleteListItem";
import {fetchAthletes} from "../../client/AthleteClient";

export default function ListAthletes() {
    const [athletes, setAthletes] = useState([])

    useEffect(() => {
        fetchAthletes().then(data => {
            setAthletes(data);
        });
    }, [])

    return (
        <Container>
            <Row className="my-2">
                <Col className="col-9">
                    <h1>Athletes</h1>
                </Col>
                <Col className="col-3">
                    <Button variant="primary" href="athletes/create">Create athlete</Button>
                </Col>
            </Row>
            <ListGroup variant="flush">
                {athletes.map((athlete) => <AthleteListItem key={athlete.id} athlete={athlete}/>)}
            </ListGroup>
        </Container>
    );
}