import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

export const GeneralInventory = (props) => {

    const INVENTORY_SPLIT_FACTOR = 4;

    const [invItemsLines, setInvItemsLines] = React.useState([]);


    const renderSlots = (props) => {
        const { maxSlot, items } = props.userProfileData.inventory;
        console.log(props.userProfileData)

        let invItemsLines = [];

        let k = [];
        for ( let i = 1; i < maxSlot; i++) {
            if ( items[i - 1 ] ) {
                k = [...k, items[i -1 ]];
            } else {
                k = [...k, null];
            }
            if ( i !== 0 && i % (maxSlot / INVENTORY_SPLIT_FACTOR) === 0 ) {
                invItemsLines = [...invItemsLines, k]
                k = [];
            }   
        }
        setInvItemsLines(invItemsLines);
        console.log(invItemsLines);
        return invItemsLines;
    }
    
    useEffect( () => {  

        if ( props.userProfileData !== null ) {
            renderSlots(props);
        }
    }, [props.userProfileData]) 

    return (
    
        <div className="container-inventory">
           <div>Test : {JSON.stringify(props)}</div>
           <div>
               {/*
                                   <div className="d-flex">
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                    </div>
                    <div className="d-flex">
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                        <div style={{"background": "red", "flex": "1", "margin": "5px"}}>ok</div>
                    </div>
               */}
             {invItemsLines && invItemsLines.length && invItemsLines.map( (line,i) => {
                        return <div className="d-flex">
                            {
                                line.map( item => {
                                    return <div style={{"background": "red", "flex": "1", "margin": "5px"}}>{item === null ? "NOTHING" : item.id}</div>

                                })
                            }
                            </div>
                   })
               } 

           </div>
        </div>
    )
}

GeneralInventory.propTypes = {
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    provider: PropTypes.string,
    profile: PropTypes.shape({
        carbong: PropTypes.number,
        level: PropTypes.number
    }),
    inventory: PropTypes.shape({
        id: PropTypes.number,
        maxSlot: PropTypes.number,
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            uuid: PropTypes.string,
            unitPrice: PropTypes.number,
            levelRequired: PropTypes.number,
            mediaUrl: PropTypes.string,
            maxStack: PropTypes.number,
            description: PropTypes.string,
            isConsumable: PropTypes.bool,
            effects: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                description: PropTypes.string
            })),
            itemTypes: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string
            }))
        }))
    })
} 
