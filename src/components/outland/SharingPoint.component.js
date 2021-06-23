import react from 'react';
import {useEffect, useState} from "react";
import { HubConnectionBuilder } from '@microsoft/signalr';


const connectToHub = (fnSetConnection, setRoomMessage) => {
    const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:5001/ws/hub')
    .withAutomaticReconnect()
    .build();


    fnSetConnection(connection);

    
    if ( connection ) {
        connection
        .start()
        .then( async result => {

            if ( connection.connectionStarted) {
                console.log("New client connected");
                try {
                    await connection.invoke("AddToGrp", "TOTO")
                    console.log("Connection added to group TOTO");

                    setTimeout( async () => {
                        await connection.invoke("SendToGroup", "HELLO Im : ");
                    },2000)
                } catch ( e ) {
                    console.log("Error", e);
                }

                connection.on('grpMessage', data => {
                    console.log(data);
                    setRoomMessage(data);
                })
            }
        })
        
    }

}

export const SharingPoint = () => {
    const [connection, setConnection] = useState("");
    const [roomMessage, setRoomMessage] = useState("");
    const [fileUrlB64, setFileUrlB64] = useState("");

    useEffect( () => {
        connectToHub(setConnection, setRoomMessage);
    },[fileUrlB64]);

    const onChange = async (ev, connection, setRoomMessage) => {
        try {
            await connection.invoke("SendToGroup", ev.target.value);
            setRoomMessage(ev.target.value);
        } catch ( e ) {
            console.log("Error sending msg", e);
        }
    }

    const onChangeFile = async (ev, setFileUrlB64) => {
        const file = ev.target.files[0];
        const { type } = file;
        console.log("File uploaded type : ", type);

        const reader = new FileReader();

        reader.addEventListener("load", function () {
            const b64FileEncoded = this.result;

            if ( b64FileEncoded !== "") {
                let downloadUrl = `${b64FileEncoded}`;
                console.log("file loaded with success, type :", type);
                setFileUrlB64(downloadUrl)
            }
          }, false);

        reader.readAsDataURL(ev.target.files[0]);
    }

    return (
        <div>
            <p>Sharing point : {connection.toString()}</p>
            <input type="text" onChange={ (ev) => onChange(ev, connection, setRoomMessage) } ></input>

            <div>
                <h4>Room msg :</h4>
                <p>{roomMessage}</p>
            </div>

            <input type="file" id="myfile" name="myfile" onChange={(ev) => {
                onChangeFile(ev, setFileUrlB64)
            }}/>
            <a download href={fileUrlB64}>Download me plz</a>
        </div>
    )
}


//const [ connection, setConnection ] = useState(null);

    
// useEffect( () => {


//     const newConnection = new HubConnectionBuilder()
//     .withUrl('https://localhost:5001/ws/hub')
//     .withAutomaticReconnect()
//     .build();

//     setConnection(newConnection);

//     async function getUserDetails() {
//         const resp = await userDetails();
//         const jsonData = await resp.json();
//         setUserProfileDetails(jsonData);
//     }
//     getUserDetails();
// }, []);

// useEffect( () => {
//     if ( connection ) {
//         connection.start()
//         .then( async result => {
//             console.log("Client connected")
//             console.log(connection.connectionId)
            
//             if ( connection.connectionStarted ) {
//                 try {
//                     await connection.invoke("AddToGrp", "GROUPNAMETEST")
//                     //await connection.send("AddToRoom", connection.connectionId)
//                     console.log("Message send with success");
//                     const resp = await fetch('https://localhost:5001/api/rooms?connectionId='+connection.connectionId)
//                     const j = await resp.json()
//                     console.log(j)
                    

//                 } catch (e) {
//                     console.log("Fail to send message", e)
//                 }

            
//             connection.on('GrpMessage', msg => {
//                 console.log("message received from your room : ")
//                 console.log(msg)
//             })

//             }

//         }).catch( err => console.log("Connection ws hub failed", err))
//     }
// }, [connection])
