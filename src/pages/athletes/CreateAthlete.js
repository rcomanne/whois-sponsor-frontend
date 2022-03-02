import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {listOrganizations} from "../../client/OrganizationClient";
import {createAthlete} from "../../client/AthleteClient";
import {listSponsors} from "../../client/SponsorClient";
import {listSports} from "../../client/SportClient";

export default function CreateAthlete() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        sport: '',
        organization: '',
        personalSponsor: ''
    })
    const [sponsors, setSponsors] = useState([]);
    const [sports, setSports] = useState([]);
    const [organizations, setOrganizations] = useState([]);

    useEffect(() => {
        listOrganizations().then(data => {
            setOrganizations(data);
        });
        listSponsors().then(data => {
            setSponsors(data);
        });
        listSports().then(data => {
            setSports(data)
        });
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        createAthlete(form);
    }

    function handleChange(event) {
        setForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <Form>
            <Form.Group className="mb-3" onChange={handleChange}>
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter athletes' first name name"/>
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" name="lastName" placeholder="Enter athletes' last name name"/>
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
                <Form.Label>Sport(s)</Form.Label>
                <Form.Control as="select" name="sport">
                    {sports.map((sport) => <option key={sport.id} value={sport.name}>{sport.name}</option> )}
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
                <Form.Label>Sponsor(s)</Form.Label>
                <Form.Control as="select" name="sponsor">
                    {sponsors.map((sponsor) => <option key={sponsor.id} value={sponsor.name}>{sponsor.name}</option> )}
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" onChange={handleChange}>
                <Form.Label>Organization(s)</Form.Label>
                <Form.Control as="select" name="organization">
                    {organizations.map((org) => <option key={org.id} value={org.name}>{org.name}</option> )}
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}