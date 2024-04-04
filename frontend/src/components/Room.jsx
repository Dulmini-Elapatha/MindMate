import React from "react";
import { useParams } from "react-router-dom";
import { appId, serversecret } from "./helper";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import Navbar from './Navbar';
import './Room.css'

const Room = () => {
  const { roomid } = useParams();

  const myMeeting = async (element) => {
    const appID = appId;
    const serverSecret = serversecret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString(),
      "Name"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: ZegoUIKitPrebuilt.Meeting,
      mode: ZegoUIKitPrebuilt.OneONOneCall,
    });
  };

  return (
    <div>
      <Navbar/>
    <div className="Room_container">
      <div ref={myMeeting} />
    </div>
    </div>
  );
};

export default Room;
