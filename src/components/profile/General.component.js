import React, {useEffect, useState} from 'react';
import {userDetails} from "../../api/profile/General.api";
import { GeneralInventory } from './General.inventory.component';


export const General = props => {

    const [userProfileDetails, setUserProfileDetails] = useState(null);

    useEffect( () => {
        async function getUserDetails() {
            const resp = await userDetails();
            const jsonData = await resp.json();
            setUserProfileDetails(jsonData);
        }
        getUserDetails();
    }, []);

    return (
        <div>
            <div className="d-flex mt-4">
                <h3>Inventaire</h3>
            </div>
        
            <GeneralInventory userProfileData={userProfileDetails}/>

            <div className="d-flex mt-4">
                <div style={{flexGrow:"1"}}>
                    <h4>Niveau 1</h4>
                    <div style={{background: "grey", width: "100%", height: "10px"}}>
                        <div style={{background: "#6C3483", width: "80%", height: "10px"}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <ul>
                    <li>[] => TODO swipe 60x</li>
                </ul>
            </div>
            <div className="d-flex mt-4">
                <h3>Missions du jour</h3>
            </div>
        </div>

    )
}