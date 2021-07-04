import React, {useState, useEffect} from "react";
import {Card, Container} from 'react-bootstrap'
import {userDetails, me, getClasses} from "../../api/profile/General.api";
import { ItemCard, itemCard } from "../item/item.component";

export const Specialization = (props) => {
    const scopesProfile = ["profile", "inventory"];

    const [userProfileDetails, setUserProfileDetails] = useState(null);
    const [classesList, setClassesList] = useState(null);


    const getMe = async scopesProfile => {
        const data = await me(scopesProfile);
        const profileJson = await data.json();
        setUserProfileDetails(profileJson.userData);
    }

    const getListClasses = async getDefaultClasses => {
        const data = await getClasses();
        const classesJson = await data.json();
        setClassesList(classesJson);
    }

    useEffect( () => {
        getMe(scopesProfile);
        getListClasses();
    }, []);

    return (
        <div>

        {userProfileDetails !== null && userProfileDetails.profile.classe !== null  && 
            <div>
                <h4> Classe : {userProfileDetails.profile.classe} </h4>
            </div>
            }

            <div>
            {userProfileDetails !== null && userProfileDetails.profile.classe === null  &&
                <div className="mt-5 text-center">
                    <h4>Pour débuter, choisissez une classe qui vous correspond et permettra d'obtenir de nombreux avantage par la suite !</h4>
                </div>
            }
            </div>
            <div className="mt-5">
            { classesList !== null && 
                    classesList.map( classe => {
                        return <div>
                                <h1>{classe.name}</h1>
                                <blockquote class="blockquote text-center">
                                <p class="mb-0">{classe.description}</p>
                                <div style={{"display": "flex"}} className="mt-4">
                                    <div style={{"flex":"1"}}>
                                        <div>
                                            <hr></hr>
                                            <p>Vous obtenez : </p>
                                            {classe.items.length > 0 && classe.items.map( item => {
                                                return <div>
                                                        <ItemCard item={item}/>
                                                    </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                                </blockquote>
                                <div style={{'display': 'flex', 'justifyContent': 'flex-end'}}>
                                    <button className="btn btn-info">Rejoindre</button>
                                </div>
                            </div>
                    })
            }
            </div>
        </div>

    )
}