import react, {useEffect, useState} from 'react';

export const GeneralLevelBar = props => {    
    const [remainsBubble, setRemainsBubble] = useState(null);

    useEffect( () => {
        if ( props.userProfileData !== null ) {
            let arrSquare = colorXpBar(props);
            setRemainsBubble(arrSquare.filter( square => square !== 1).length)
        }

        // Notification.requestPermission( (status) => {
        //      new Notification("Time for the last battle !", {body: "🤑 notification body",
        //       icon: "https://www.pngkey.com/png/detail/90-901844_yellow-exclamation-png-download-wow-quest-exclamation-mark.png",
        //       image : "https://wow.zamimg.com/images/wow/icons/large/inv_sword_48.jpg"});
        // });

        // 

    }, [props.userProfileData]); // rerender on props change for setRemainsBuble

    const colorXpBar = props => {
        let {maxLevel, level, currentLevelProgression} = props.userProfileData.profile;

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
               
                <p className="text-center">Barre restante : {remainsBubble}</p>
                <div style={{"display": "flex"}}>
                   {
                       props && props.userProfileData !== null && colorXpBar(props).map( square => {
                           return <div style={{"background": squareBarXP(square), "flex": "1", "height": "20px", "border":"solid"}}></div>
                       })
                   }
                </div>
            </div>
        </div>
    </div>
)
}