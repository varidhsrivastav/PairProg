import { splitTags, TagsList } from "@/components/tags-list";
import { Badge } from "@/components/ui/badge";
import { getRoom } from "@/data-access/rooms";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { TagsIcon } from "lucide-react";
import Link from "next/link";
import { DevFinderVideo } from "./video-player";

export default async function Roompage(props:{params: {roomId:string}}){
    // console.log(props)
    const roomId=props.params.roomId;
    const room =await getRoom(roomId);
    if(!room){
        return <div> No such room</div>
    }
    
    return(
    <div className="grid grid-cols-4 min-h-screen" >
        <div className="col-span-3 p-4 pr-2 ">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                Video <DevFinderVideo room={room}/>
            </div>
        </div>
        <div className="col-span-1 p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
            <div className="text-bae">{room?.name}</div>
            <p className="text-base text-gray-600">{room?.description}</p>
            {
          room.githubRepo && <Link href={room.githubRepo as string} className="flex items-center gap-2" target="_blank">
          <GitHubLogoIcon/>
          Github Project
        </Link>
        }
           <TagsList tags={splitTags(room.tags)} />
            
        </div>
        </div>
    </div>
    )
}