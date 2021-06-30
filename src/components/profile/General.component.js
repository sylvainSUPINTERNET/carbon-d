import React, {useEffect, useState} from 'react';
import { config } from '../../api/profile/config';
import {userDetails, me} from "../../api/profile/General.api";
import { GeneralInventory } from './General.inventory.component';
import { GeneralLevelBar } from './General.levelBar.component';
import { Specialization } from './Specialisation.component';

import { Quests } from './General.quests.component';


export const General = props => {

    const scopesProfile = ["profile", "inventory"];

    const [userProfileDetails, setUserProfileDetails] = useState(null);


    const getMe = async scopesProfile => {
        const data = await me(scopesProfile);
        const profileJson = await data.json();
        setUserProfileDetails(profileJson.userData);
    }

    useEffect( () => {
        getMe(scopesProfile);
    }, []);

    

    return (
        <div>
            {userProfileDetails !== null && <h4> Classe : {userProfileDetails.profile.classe} </h4>}

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