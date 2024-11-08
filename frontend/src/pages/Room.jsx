import {useParams} from "react-router-dom"
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const RoomPage = () =>{
    const {roomId} = useParams();

    const myMeeting = async(element) => {
          const appID = 745875352;
          const serverSecret = "f0d743a8b86c9bb61e0db3eca2fae700";
          const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID , serverSecret , roomId , Date.now().toString() , "Aayush");

          const zc = ZegoUIKitPrebuilt.create(kitToken);
          zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name : 'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            // screenSharingConfig: {
            //     mode : off
            // }
            showScreenSharingButton: false
          });
    };
    return <div>
        <div ref = {myMeeting}/>
    </div>
};

export default RoomPage;