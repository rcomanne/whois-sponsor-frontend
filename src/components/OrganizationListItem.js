import React from "react";
import {ListGroup} from "react-bootstrap";

export default function OrganizationListItem(props) {
    return (
        <ListGroup.Item action href={`/organizations/${props.org.id}`} className="my-1">
            {props.org.name}
        </ListGroup.Item>
    )
}