import React, {useEffect, useState} from 'react';
import { config } from '../../api/profile/config';
import {userDetails, me} from "../../api/profile/General.api";
import { GeneralInventory } from './General.inventory.component';
import { GeneralLevelBar } from './General.levelBar.component';
import { Quests } from './General.quests.component';


export const General = props => {


    const [userProfileDetails, setUserProfileDetails] = useState(null);


    const getMe = async (["profile","iventory"]) => {
        const data = await me();
        const profileJson = await data.json();
        setUserProfileDetails(profileJson);
    }

    useEffect( () => {
        getMe();
    }, [userProfileDetails]);

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
            <Quests></Quests>
        </div>

    )
}