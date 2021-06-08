import react, {useEffect, useState} from 'react';

export const GeneralLevelBar = props => {    
    useEffect( () => {

        console.log("test")
        if ( props.userProfileData !== null ) {
            colorXpBar(props);
        }

    }, []);

    const colorXpBar = props => {
        let {maxLevel, level, currentLevelProgression} = props.userProfileData.profile;
        

        const greySquare = level - currentLevelProgression;
        console.log("grey", greySquare);

        let arr = [];
        for ( let i = 0; i < level; i++ ) {
            if ( i < currentLevelProgression ) {
                arr = [...arr, 1]; // square completed

            } else {
                arr = [...arr, 0]; // square NOT completed
            }
        }
        return arr;
    }   

    const squareBarXP = (isCompleted) => {
        if ( isCompleted === 1 ) {
            return "#6C3483"
        } else {
            return "grey"
        }
    }
    
    return (<div>
        <div className="d-flex mt-4">
            <div style={{flexGrow:"1"}}>
                <h4>Niveau { props && props.userProfileData !== null && props.userProfileData.profile.level } / { props && props.userProfileData !== null && props.userProfileData.profile.maxLevel } </h4>
                <div style={{"display": "flex"}}>
                   {
                       props && props.userProfileData !== null && colorXpBar(props).map( square => {
                           return <div style={{"background": squareBarXP(square), "flex": "1", "height": "20px", "border":"solid"}}></div>
                       })
                   }
                </div>

                {/* <div style={{background: "grey", width: "100%", height: "10px"}}>
                     <div style={{background: "#6C3483", width: "1%", height: "10px"}}>
                    </div> 
                </div> */}
            </div>
        </div>
    </div>
)
}