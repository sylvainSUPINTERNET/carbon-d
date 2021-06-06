import {useEffect} from 'react';

export const General = props => {

    useEffect( () => {
        
    }, []);

    return (
        <div>
            <div className="d-flex mt-4">
                <h3>Inventaire</h3>
            </div>

            <div className="container-inventory">
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

            <div className="d-flex mt-4">
                <div style={{flexGrow:"1"}}>
                    <h4>Niveau 1</h4>
                    <div style={{background: "grey", width: "100%", height: "10px"}}>
                        <div style={{background: "#6C3483", width: "80%", height: "10px"}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <ul>
                    <li>[] => TODO swipe 60x</li>
                </ul>
            </div>
            <div className="d-flex mt-4">
                <h3>Missions du jour</h3>
            </div>
        </div>

    )
}