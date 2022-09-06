/*----- VARIABLES -----*/
let userToken = ""
let ChannelID = ""
let messsage = ""
/*--- //VARIABLES// ---*/

let Channel = "https://discord.com/api/v9/channels/" + ChannelID + "/messages"
const req = () => {
    const Options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': userToken,
        },
        body: JSON.stringify({content: messsage})
    };
    fetch(Channel, Options)
        .then(response => response.json())

    console.log("Message Sended")
}
req()