import React, {useEffect, useState} from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {findSponsor} from "../../client/SponsorClient";
import AthleteListItem from "../../components/AthleteListItem";
import OrganizationListItem from "../../components/OrganizationListItem";

export default function Sponsor() {
    let params = useParams();
    const [sponsor, setSponsor] = useState({
        name: '',
        description: '',
        organizations: [],
        athletes: [],
    })

    useEffect(() => {
        findSponsor(params.id).then(data => {
            setSponsor({...sponsor, ...data});
        });
    }, [params.id])

    return (
        <Container>
            <Row className="my-auto">
                <Col className="m-auto">
                    <h1>{sponsor.name}</h1>
                </Col>
            </Row>
            <Row>
                <p>{sponsor.description}</p>
            </Row>
            <Row className="my-auto">
                <Col className="col-6">
                    Organizations
                </Col>
                <Col className="col-6">
                    Athletes
                </Col>
            </Row>

            <Row className="my-auto">
                <Col className="col-6">
                    <ListGroup variant="flush">
                        {sponsor.organizations.map((organizations) => {
                            return <OrganizationListItem key={organizations.id} athlete={organizations}/>
                        })}
                    </ListGroup>
                </Col>
                <Col className="col-6">
                    <ListGroup variant="flush">
                        {sponsor.athletes.map((athlete) => {
                            return <AthleteListItem key={athlete.id} athlete={athlete}/>
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}