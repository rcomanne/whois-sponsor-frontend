import React, {useEffect, useState} from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {findSport} from "../../client/SportClient";
import AthleteListItem from "../../components/AthleteListItem";
import SponsorListItem from "../../components/SponsorListItem";
import OrganizationListItem from "../../components/OrganizationListItem";

export default function Sport() {
    const [sport, setSport] = useState({
        name: '',
        description: '',
        athletes: [],
        sponsors: [],
        organizations: []
    })
    let params = useParams();

    useEffect(() => {
        findSport(params.id).then(data => {
            setSport({...sport, ...data});
        });
    }, [params.id])

    return (
        <Container>
            <Row className="my-auto">
                <Col className="m-auto">
                    <h1>{sport.name}</h1>
                </Col>
            </Row>
            <Row className="my-auto">
                <Col className="justify-content-center">
                    Organizations
                </Col>
                <Col>
                    Athletes
                </Col>
            </Row>

            <Row className="my-auto">
                <Col className="col-6">
                    <ListGroup variant="flush">
                        {sport.organizations.map((organizations) => {
                            return <OrganizationListItem key={organizations.id} athlete={organizations}/>
                        })}
                    </ListGroup>
                </Col>
                <Col className="col-6">
                    <ListGroup variant="flush">
                        {sport.athletes.map((athlete) => {
                            return <AthleteListItem key={athlete.id} athlete={athlete}/>
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}