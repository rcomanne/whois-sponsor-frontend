import React from "react";
import {ListGroup} from "react-bootstrap";

export default function SportListItem(props) {
    return (
        <ListGroup.Item action href={`/sports/${props.sport.id}`} className="my-1">
            {props.sport.name}
        </ListGroup.Item>
    )
}