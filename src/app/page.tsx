import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getRoom } from "@/data-access/rooms";
import {db} from "@/db"
import { Room } from "@/db/schema";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
function RoomCard({room}:{room:Room}){
  return(
    <Card>
      <CardHeader>
        <CardTitle>
          {room.name}
        </CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={room.githubRepo as string} className="flex items-center gap-2" target="_blank">
          <GitHubLogoIcon/>
          Github Project
        </Link>
        
      </CardContent>
      <CardFooter>
      <Button asChild>
        <Link href={`/rooms/${room.id}`}>
        Join room
        </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default async function Home() {
  const rooms = await getRoom();
  return (
    <main className=" min-h-screen  p-16">
      <div className="flex justify-between items-center">
      <h1 className="text-4xl">Find Dev Room</h1>
      <Button asChild>
        <Link href="/create-room">
        Create Room
        </Link>
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
      {rooms.map((room)=>{
        return <RoomCard key={room.id} room={room}/>
      })}
      </div>
    </main>
  );
}
