'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SiTraefikproxy } from "react-icons/si";
import { MdBarChart } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { BsChat } from "react-icons/bs";
import { useSession } from "next-auth/react";

const menuList = [
  {
    id: 1,
    title: "Trang chủ",
    url: "dashboard",
    icons: <SiTraefikproxy size={35} fill='gray' />,
  },
  {
    id: 2,
    title: "Thống kê",
    url: "statastic",
    icons: <MdBarChart size={35} fill='gray' />,
  },
  {
    id: 3,
    title: "Hỗ trợ",
    url: "support",
    icons: <MdOutlineContactSupport size={35} fill='gray' />,
  },
  {
    id: 4,
    title: "Inbox",
    url: "inbox",
    icons: <BsChat size={35} fill='gray' />,
  },
];

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  
  const { data } = useSession()

  return (
    <div className='basis-1/5 bg-[#ebf5ff] py-5 pl-5 flex flex-col justify-between'>
      <div>
        <div className='flex items-center gap-x-4 mb-10'>
          <Image src='/logo-chat.png' alt='logo-chat' width={50} height={50} />
          <span className='text-2xl text-[#33ccff] font-bold'>Chat App</span>
        </div>
        <div>
          <ul>
            {menuList.map((item, index) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className='flex items-center gap-x-6 p-4 hover:bg-white rounded-l-xl'
                >
                  {item.icons}
                  <span className='text-xl font-medium'>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex items-center gap-x-6 p-4 cursor-pointer rounded-l-xl relative'>
        <div className='w-[60px] h-[60px] overflow-hidden rounded-full border-2 border-blue-600'>
          {data?.user.avatar ? (
            <Image
              src={data?.user?.avatar || ""}
              alt={data?.user?.fullName || ""}
              width={60}
              height={60}
              className='w-full h-full bg-center bg-cover'
            />
          ) : (
            <div className='w-full h-full flex justify-center items-center border'>
              {"V"}
            </div>
          )}
        </div>
        <span className='text-xl font-medium'>
          {data?.user?.fullName || "Chua co thong tin"}
        </span>
        <div className="absolute -top-[120%] right-1/4 w-[200px] bg-white shadow-2xl rounded-xl p-2">
            <div>
              <Link href='/profile' className="hover:text-[#33ccff] flex justify-center p-4">Trang cá nhân</Link>
            </div>
            <div>
              <Link href='/api/auth/signout' className="hover:text-[#33ccff] flex justify-center p-4">Đăng xuất</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
