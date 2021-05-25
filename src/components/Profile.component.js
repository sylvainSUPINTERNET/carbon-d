import React, {useState} from "react";
import {Nav, Container} from 'react-bootstrap'
import { Caracteristic } from "./profile/Caracteristic.component";
import { General } from "./profile/General.component";
import { Specialization } from "./profile/Specialisation.component";

export const Profile = () => {

    const  [displayGeneral, setDisplayGeneral] = useState(true);
    const  [displayCarac, setDisplayCarac] = useState(false);
    const  [displaySpec, setDisplaySpec] = useState(false);

    const onTabClick = ev => {

        if ( ev.target.id === "general" ) {
            setDisplayCarac(false)
            setDisplaySpec(false)
            setDisplayGeneral(true);
        }

        if ( ev.target.id === "carac" ) {
            setDisplayCarac(true)
            setDisplaySpec(false)
            setDisplayGeneral(false);
        }

        if ( ev.target.id === "spec" ) {
            setDisplayCarac(false)
            setDisplaySpec(true)
            setDisplayGeneral(false);
        }


    }
    return (
        <Container>
            <Nav variant="tabs" defaultActiveKey="general">
                <Nav.Item>
                    <Nav.Link eventKey="general" id="general"  onClick={onTabClick}>Général</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="carac" id="carac" onClick={onTabClick}>Caractéristiques</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="spec" id="spec"  onClick={onTabClick}>Spécialisation</Nav.Link>
                </Nav.Item>
            </Nav>
            { displayCarac === true && <Caracteristic/> }
            { displaySpec === true && <Specialization/> }
            { displayGeneral === true && <General/> }

        </Container>
    )
}