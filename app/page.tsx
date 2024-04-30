import Image from "next/image";
import { db } from "./connection";


export default async function Home() {
  const user  = await db.userRepository.findOneBy({email: "montheeric1@gmail.com"})
  
  return (
    <div>
      <div>{user?.email}</div>
      <div className="size-10">
        <Image
          alt="user avatar"
          src={user?.image ?? ""}
          className="object-cover"
          fill
        />
      </div>
    </div>
  );
}