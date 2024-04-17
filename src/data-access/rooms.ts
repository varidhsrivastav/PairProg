import {db} from "@/db"
import { unstable_noStore } from "next/cache";
export async function getRoom(){
    // by this we canmark entire orute as dynamic
    unstable_noStore();
    const rooms = await db.query.room.findMany();
    return rooms;
}