import React from "react";
import {ListGroup} from "react-bootstrap";

export default function SponsorListItem(props) {
    return (
        <ListGroup.Item action href={`/sponsors/${props.sponsor.id}`} className="my-1 mx-auto">
            {props.sponsor.name}
        </ListGroup.Item>
    )
}