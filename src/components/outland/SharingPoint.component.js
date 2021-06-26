import react from 'react';
import {useEffect, useState, useRef} from "react";
import { HubConnectionBuilder } from '@microsoft/signalr';


const connectToHub = (fnSetConnection, setRoomMessage, setUploadedB64, roomId) => {
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
                    await connection.invoke("AddToGrp", roomId)
                    console.log("Connection added to group :", roomId);

                    setTimeout( async () => {
                        await connection.invoke("SendToGroup", "HELLO Im : ", roomId);
                    },2000)
                } catch ( e ) {
                    console.log("Error", e);
                }

                connection.on('grpMessage', data => {
                    console.log("=== RECEIVED ")
                    console.log(data);
                    console.log("RECEIVED ++")
                    const { message, sendId } = data;
                    setRoomMessage(message);
                });

                connection.on('grpFile', data => {
                    console.log("Received file")
                    console.log(data);
                    setUploadedB64(data);
                })
            }
        })
        
    }

}

export const SharingPoint = (props) => {

    let [roomId, setRoomId] = useState("");

    const [connection, setConnection] = useState("");
    let [roomMessage, setRoomMessage] = useState("");
    const [fileUrlB64, setFileUrlB64] = useState("");
    const [uploadedB64, setUploadedB64] = useState("");


    useEffect( () => {
        setRoomId(props.roomId);
        connectToHub(setConnection, setRoomMessage, setUploadedB64, props.roomId);
    },[fileUrlB64, uploadedB64]);


    const onChange = async (ev, connection, setRoomMessage) => {
        try {
            await connection.invoke("SendToGroup", ev.target.innerText, roomId);
            setRoomMessage(ev.target.innerText);
        } catch ( e ) {
            console.log("Error sending msg", e);
        }
    }

    const onChangeFile = async (ev, setFileUrlB64, connection) => {
        const file = ev.target.files[0];
        const { type } = file;
        console.log("File uploaded type : ", type);

        const reader = new FileReader();

        reader.addEventListener("load", async function () {
            const b64FileEncoded = this.result;

            if ( b64FileEncoded !== "") {
                let downloadUrl = `${b64FileEncoded}`;
                console.log("file loaded with success, type :", type);
                setFileUrlB64(downloadUrl)

                console.log("Send file to ", roomId);
                await connection.invoke("SendFileToGroup", downloadUrl, roomId);
            }
          }, false);

        reader.readAsDataURL(ev.target.files[0]);
    }

    return (
        <div>
            <p>Room : {roomId}</p>

            <div style={{"display":"flex","background": "red"}}>
                <div style={{"flex": "1", "background": "yellow", maxHeight: '700px', height:'700px'}}>
                    <div style={{maxHeight: '700px', height:'700px','overflowY': 'scroll'}} contentEditable={true}  onInput={(ev) => onChange(ev, connection, setRoomMessage)} >
                    </div>
                </div>
                <div style={{"flex": "1", "background":"purple"}}>
                    {roomMessage}
                </div>
            </div>

            <input type="file" id="myfile" name="myfile" onChange={(ev) => {
                onChangeFile(ev, setFileUrlB64, connection)
            }}/>

            <h3>Uploaded file</h3>
            <a download href={uploadedB64}>Download</a>
        </div>
    )
}