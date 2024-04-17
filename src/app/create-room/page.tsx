import { CreateRoomForm } from "./create-room-form";

export default function CreateRoomPage(){
    return(
        
        <div className="conatainer mx-auto">
        <div>
            <h1 className="text-4xl font-">Create Room</h1>
            
        <div className="conatainer mx-auto">
            <CreateRoomForm/>
        </div>
        </div>
        </div>
    )
}