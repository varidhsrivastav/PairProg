"use client";
import { Room } from "@/db/schema";
import {
  Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  User,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY;
//   const userId = 'user-id';
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMDU0MGQxMGItMzU2OS00ZmJlLWEyMWQtMjVjYjllNmNiMWUzIn0.G5oLBRw5MdVw5kIwXRb7I2TygD58ZqB8uILbmldTXiY";

export function DevFinderVideo({ room }: { room: Room }) {
  const session = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!room) return;
    if (!session.data) {
      return;
    }
    const userId= session.data.user.id;
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
      },
      token,
    });
    setClient(client);
    const call = client.call("default", room.id);
    call.join({ create: true });
    setCall(call);
    return () => {
      call.leave();
      client.disconnectUser();
    };
  }, [session, room]);
  return (
    client &&
    call && (
      <StreamVideo client={client}>
        <StreamTheme>
        <StreamCall call={call}>
            <SpeakerLayout/>
            <CallControls/>
        </StreamCall>
        </StreamTheme>
      </StreamVideo>
    )
  );
}
