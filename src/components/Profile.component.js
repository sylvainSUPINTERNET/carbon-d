import React, {useState} from "react";
import {Nav, Container} from 'react-bootstrap'
import { Caracteristic } from "./profile/Caracteristic.component";
import { Specialization } from "./profile/Specialisation.component";

export const Profile = () => {
    const  [displayCarac, setDisplayCarac] = useState(true);
    const  [displaySpec, setDisplaySpec] = useState(false);


    const onTabClick = ev => {
        if ( ev.target.id === "carac" ) {
            setDisplayCarac(true)
            setDisplaySpec(false)
        }

        if ( ev.target.id === "spec" ) {
            setDisplayCarac(false)
            setDisplaySpec(true)
        }
    }
    return (
        <Container>
            <Nav variant="tabs" defaultActiveKey="carac">
                <Nav.Item>
                    <Nav.Link eventKey="carac" id="carac" onClick={onTabClick}>Caractéristiques</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="spec" id="spec"  onClick={onTabClick}>Spécialisation</Nav.Link>
                </Nav.Item>
            </Nav>
            { displayCarac === true && <Caracteristic/> }
            { displaySpec === true && <Specialization/> }
        </Container>
    )
}