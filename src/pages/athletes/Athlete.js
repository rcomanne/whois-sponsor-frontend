import React, {useEffect, useState} from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {findAthlete} from "../../client/AthleteClient";
import OrganizationListItem from "../../components/OrganizationListItem";
import SponsorListItem from "../../components/SponsorListItem";

export default function Athlete() {
    let params = useParams();
    const [athlete, setAthlete] = useState({
        firstName: '',
        lastName: '',
        organizations: [],
        sponsors: [],
        sports: []
    })

    useEffect(() => {
        findAthlete(params.id).then(data => {
            setAthlete({...athlete, ...data});
        });
    }, [params.id]);

    return (
        <Container>
            <Row className="my-2">
                <Col className="m-auto col-9">
                    <h1>{athlete.firstName} {athlete.lastName}</h1>
                </Col>
                <Col className="col-3">

                </Col>
            </Row>
            <Row className="my-2">
                <Col className="col-6">
                    Organizations
                </Col>
                <Col className="col-6">
                    Sponsors
                </Col>
            </Row>

            <Row className="my-2">
                <Col className="col-6">
                    <ListGroup variant="flush">
                        {athlete.organizations.map((org) => {
                            return <OrganizationListItem key={org.id} org={org}/>
                        })}
                    </ListGroup>
                </Col>

                <Col className="col-6">
                    <ListGroup variant="flush">
                        {athlete.sponsors.map((sponsor) => {
                            return <SponsorListItem key={sponsor.id} sponsor={sponsor}/>
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}