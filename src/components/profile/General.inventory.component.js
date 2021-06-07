import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export const GeneralInventory = (props) => {

    const INVENTORY_SPLIT_FACTOR = 4;


    const renderSlots = (props) => {
        const { maxSlot, items } = props.userProfileData.inventory;

        let invItemsLines = [];

        let k = [];
        for ( let i = 0; i < maxSlot; i++) {
            if ( items[i] ) {
                k = [...k, items[i]];
            } else {
                k = [...k, null];
            }
            if ( i !== 0 && i % (maxSlot / INVENTORY_SPLIT_FACTOR) === 0 ) {
                invItemsLines = [...invItemsLines, k]
                k = [];
            }
        }

        console.log(invItemsLines);
    }


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

               {renderSlots(props)}

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
