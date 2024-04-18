import { TagsList } from "@/components/tags-list";
import { splitTags } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRooms } from "@/data-access/rooms";
import { db } from "@/db";
import { Room } from "@/db/schema";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SearchBar } from "./search-bar";
import { unstable_noStore } from "next/cache";
import { RoomCard } from "@/app/your-rooms/user-room-card";
export default async function Home({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  unstable_noStore();
  const rooms = await getRooms(searchParams.search);

  return (
    <main className=" min-h-screen  p-16">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl">Find Dev Room</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      <div className="mt-20">
        <SearchBar />
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4">
        {rooms.map((room) => {
          return <RoomCard key={room.id} room={room} />;
        })}
      </div>
    </main>
  );
}
