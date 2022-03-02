import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {createSponsor} from "../../client/SponsorClient";

export default function CreateSponsor() {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    function handleChange(event) {
        setForm((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        createSponsor(form);
    }

    return (
        <Form className="m-auto">
            <Form.Group className="mb-3" onChange={handleChange}>
                <Form.Label>Sponsor name</Form.Label>
                <Form.Control type="text" placeholder="Enter sponsor name" name="name"/>
            </Form.Group>
            <Form.Group className="mb-3" name="name" onChange={handleChange}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter description" name="description"/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}