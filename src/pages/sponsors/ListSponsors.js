import React, {useEffect, useState} from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import SponsorListItem from "../../components/SponsorListItem";
import {listSponsors} from "../../client/SponsorClient";

export default function ListSponsors() {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        listSponsors().then(data => {
            setSponsors(data);
        });
    }, [])

    return (
        <Container>
            <Row className="my-2">
                <Col className="col-9">
                    <h1>Sponsors</h1>
                </Col>
                <Col className="col-3">
                    <Button variant="primary" href="sponsors/create">Create sponsor</Button>
                </Col>
            </Row>
            <Row>
                <ListGroup variant="flush">
                    {sponsors.map((sponsor) => <SponsorListItem key={sponsor.id} sponsor={sponsor}/>)}
                </ListGroup>
            </Row>
        </Container>
    );
}