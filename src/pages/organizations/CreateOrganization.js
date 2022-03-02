import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {createOrganization} from "../../client/OrganizationClient";

export default function CreateOrganization() {
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
        createOrganization(form);
    }

    return (
        <Form>
            <Form.Group className="mb-3" name="name" onChange={handleChange}>
                <Form.Label>Organization name</Form.Label>
                <Form.Control type="text" placeholder="Enter organization name" name="name"/>
            </Form.Group>
            <Form.Group className="mb-3" name="name" onChange={handleChange}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter description" name="description"/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}