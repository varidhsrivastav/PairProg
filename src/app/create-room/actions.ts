"use server";

import { Room, room } from "@/db/schema";
import { db } from "@/db";
import { getSession } from "@/lib/auth";

export async function createRoomAction(roomData: Omit<Room, "id" |"UserId">) {
  const session = await getSession();
  if(!session){
    throw new Error("You must be logged in to create this room")
  }
  console.log(session);
  await db.insert(room).values({ ...roomData, userId: session.user.id });
}
