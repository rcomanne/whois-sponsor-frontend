import React, {useEffect, useState} from "react";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {findOrganization} from "../../client/OrganizationClient";
import OrganizationListItem from "../../components/OrganizationListItem";
import AthleteListItem from "../../components/AthleteListItem";

export default function Organization() {
    let params = useParams();
    const [organization, setOrganization] = useState({
        name: '',
        description: '',
        sponsors: [],
        athletes: []
    })

    useEffect(() => {
        findOrganization(params.id).then(data => {
            setOrganization({...organization, ...data});
        });
    }, [params.id])

    return (
        <Container>
            <Row className="my-auto">
                <Col className="m-auto">
                    <h1>{organization.name}</h1>
                </Col>
            </Row>
            <Row>
                <p>{organization.description}</p>
            </Row>
            <Row className="my-auto">
                <Col className="col-6">
                    Sponsors
                </Col>
                <Col className="col-6">
                    Athletes
                </Col>
            </Row>

            <Row className="my-auto">
                <Col className="col-6">
                    <ListGroup variant="flush">
                        {organization.sponsors.map((sponsor) => {
                            return <OrganizationListItem key={sponsor.id} sponsor={sponsor}/>
                        })}
                    </ListGroup>
                </Col>

                <Col className="col-6">
                    <ListGroup variant="flush">
                        {organization.athletes.map((athlete) => {
                            return <AthleteListItem key={athlete.id} athlete={athlete}/>
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}