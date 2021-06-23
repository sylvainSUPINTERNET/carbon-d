import react from 'react';
import {useEffect, useState} from "react";
import { HubConnectionBuilder } from '@microsoft/signalr';


const connectToHub = () => {
    const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:5001/ws/hub')
    .withAutomaticReconnect()
    .build();

    
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

                connection.on('GrpMessage', data => {
                    console.log(data);
                })
            }
        })
        
    }

}

export const SharingPoint = () => {

    useEffect( () => {
        connectToHub();
    },[]);

    return (
        <div>
            <p>Sharing point : </p>
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
