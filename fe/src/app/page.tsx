import ContainerChat from "@/components/container-chat/ContainerChat";
import Sidebar from "@/components/sidebar/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className='flex border w-full h-full justify-between shadow-2xl rounded-3xl bg-white overflow-hidden'>
      <Sidebar />
      <ContainerChat />
    </div>
  );
}
