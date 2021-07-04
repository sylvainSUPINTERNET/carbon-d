import { qualityColors } from "../../constants/item";
import tooltipBg from "../../assets/tooltip.png"
export const ItemCard = (props) => {
    return <div style={{"display": "flex", "justifyContent": "center"}}>
        <div style={{"backgroundImage": `url(${tooltipBg})` }} className="rounded">
            <div style={{"display":"flex", "flexWrap": "wrap"}}>
                <div style={{flex: "1", "width": "100px", "padding": "5px"}}>
                    <img className="rounded" src={props.item.mediaUrl}></img>
                </div>
                <div style={{flex: "3", "width": "150px"}}>
                    <p style={{"color": qualityColors[props.item.quality]}}>{props.item.name}</p>
                    <p style={{"textAlign": "", fontSize: "12px", "padding": "10px", "color": "whitesmoke"}}>{props.item.description}</p>
                    <div style={{"display":"flex"}}>
                        <div style={{"flex": "2", "width": "100px", "fontSize": "12px", "color":"whitesmoke"}}>
                            <p>{props.item.unitPrice} C</p>
                        </div>
                        <div style={{"flex": "5", "width": "100px",  "fontSize": "12px", "color":"whitesmoke"}}>
                            <p>Niveau {props.item.levelRequired}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}