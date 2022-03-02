import React, {useEffect, useState} from "react";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import OrganizationListItem from "../../components/OrganizationListItem";
import {listOrganizations} from "../../client/OrganizationClient";

export default function ListOrganizations() {
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
            listOrganizations().then(data => {
                setOrganizations(data);
            });
        }, [])

    return (
        <Container>
            <Row className="my-2">
                <Col className="col-9">
                    <h1>Organizations</h1>
                </Col>
                <Col className="col-3">
                    <Button variant="primary" href="organizations/create">Create organization</Button>
                </Col>
            </Row>
            <Row>
                <ListGroup variant="flush">
                    {organizations.map((org) => <OrganizationListItem key={org.id} org={org}/>)}
                </ListGroup>
            </Row>
        </Container>
    );
}