import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiTraefikproxy } from "react-icons/si";
import { MdBarChart } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { BsChat } from "react-icons/bs";

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
  {
    id: 5,
    title: "Cá nhân",
    url: "profile",
    icons: <CiUser size={35} fill='gray' />,
  },
];

const Sidebar = () => {
  return (
    <div className='basis-1/5 bg-[#ebf5ff] py-5 pl-5'>
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
  );
};

export default Sidebar;
