import { Button } from "@/components/ui/button";
import { getRooms, getUserRooms } from "@/data-access/rooms";
import Link from "next/link";
import { unstable_noStore } from "next/cache";
import { UserRoomCard } from "@/app/your-rooms/user-room-card";

export default async function YourRoomsPage() {
  unstable_noStore();
  const rooms = await getUserRooms();

  return (
    <main className=" min-h-screen  p-16">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">Your Room</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <UserRoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
