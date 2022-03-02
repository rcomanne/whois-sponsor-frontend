import React from "react";
import {ListGroup} from "react-bootstrap";

export default function AthleteListItem(props) {
    return (
        <ListGroup.Item action href={`/athletes/${props.athlete.id}`} className="my-1">
            {props.athlete.firstName} {props.athlete.lastName}
        </ListGroup.Item>
    )
}