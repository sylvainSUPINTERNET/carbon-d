import React, {useEffect, useState} from 'react';
import {userDetails} from "../../api/profile/General.api";
import { GeneralInventory } from './General.inventory.component';
import { GeneralLevelBar } from './General.levelBar.component';



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
            <GeneralLevelBar userProfileData={userProfileDetails}/>

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