import {db} from "@/db"

export default async function Home() {
  const rooms = await db.query.room.findMany();
  return (
    <main className="">
      {rooms.map((room)=>{
        return <div key={room.userId}>{room.name}</div>
      })}
    </main>
  );
}
