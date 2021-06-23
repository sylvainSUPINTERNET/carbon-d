import React, {useEffect, useState} from 'react';
import { config } from '../../api/profile/config';
import {userDetails} from "../../api/profile/General.api";
import { GeneralInventory } from './General.inventory.component';
import { GeneralLevelBar } from './General.levelBar.component';
import { Quests } from './General.quests.component';


export const General = props => {


    const [userProfileDetails, setUserProfileDetails] = useState(null);
   
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