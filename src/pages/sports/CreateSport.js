import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {createSport} from "../../client/SportClient";

export default function CreateSport() {
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
        createSport(form);
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="sportName" onChange={handleChange}>
                <Form.Label>Sport name</Form.Label>
                <Form.Control type="text" placeholder="Enter sport name"/>
            </Form.Group>
            <Form.Group className="mb-3" name="name" onChange={handleChange}>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter description" name="description"/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    )

}