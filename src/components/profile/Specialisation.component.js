import React, {useState, useEffect} from "react";
import {Card, Container} from 'react-bootstrap'
import {userDetails, me, getClasses, joinClasses} from "../../api/profile/General.api";
import { ItemCard, itemCard } from "../item/item.component";
import { ButtonPpc } from "../utils/Button";

export const Specialization = (props) => {
    const scopesProfile = ["profile", "inventory"];

    const [userProfileDetails, setUserProfileDetails] = useState(null);
    const [classesList, setClassesList] = useState(null);

    const [joinIsLoading, setJoinIsLoading] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);


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

    const joinClasse = (ev, classeName) => {
        setDisplayModal(true);
    }

    const hideModal = () => {
        setJoinIsLoading(false);
        setDisplayModal(false);
    }
    const handleCloseModal= () => {
        setJoinIsLoading(false);
        setDisplayModal(false);
    }

    const handleSuccessModal = async (classeName) => {
        console.log("HANDLE SUCCESS");
        setDisplayModal(false);

        setJoinIsLoading(true);
        try {
            const data = await joinClasses(classeName)
            const jData = await data.json();
            console.log(jData);
            setJoinIsLoading(false);
        } catch ( e ) {
            console.log(e);
            setJoinIsLoading(false);
        }

    }


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
                                    <button className="btn btn-info" onClick={(ev) => joinClasse(ev, classe.name)}>Rejoindre</button>
                                    <ButtonPpc 
                                    classNameBtn="btn btn-info" 
                                    btnText="Rejoindre" 
                                    click={(ev) => {joinClasse(ev, classe.name)}}
                                    isLoading={joinIsLoading} 
                                    mustBeConfirmed={true}
                                    modalDisplay={displayModal}
                                    hideModal={hideModal}
                                    handleCloseModal={handleCloseModal}
                                    handleSuccessModal={() => {handleSuccessModal(classe.name)} }
                                    modalTitle={"Classe : " + classe.name}
                                    modalBody={"Renjoindre cette classe est définitif !"}
                                    modalCancel={"Annuler"}
                                    modalOk={"Confirmer"}
                                    />
                                </div>
                            </div>
                    })
            }
            </div>
        </div>

    )
}