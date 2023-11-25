import ContainerChat from "@/components/container-chat/ContainerChat";
import Sidebar from "@/components/sidebar/Sidebar";

export default async function Home() {
  return (
    <div className='flex border w-full h-full justify-between shadow-2xl rounded-3xl bg-white overflow-hidden'>
      <Sidebar />
      <ContainerChat />
    </div>
  );
}
