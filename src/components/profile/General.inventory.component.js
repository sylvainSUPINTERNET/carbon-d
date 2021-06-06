import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export const GeneralInventory = (props) => {
    return (
        <div className="container-inventory">
            <div className="d-flex">
                <div>Test : {JSON.stringify(props)}</div>
                
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
