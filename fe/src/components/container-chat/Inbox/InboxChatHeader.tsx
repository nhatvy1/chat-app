import Image from "next/image";
import { CiSearch, CiVideoOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa";

const InboxChatHeader = () => {
  return (
    <div className='flex justify-between items-center p-5 border-b absolute top-0 w-full'>
      <div className='flex items-center gap-x-4'>
        <div>
          <Image
            src='/avatar.jpg'
            alt='loi-anh'
            width={40}
            height={40}
            className='bg-center bg-contain w-full h-full rounded-full'
          />
        </div>
        <div>
          <p className='font-medium'>Huynh Vy</p>
          <p className='text-sm font-light text-gray-500 flex items-center gap-x-2'>
            <span>Online</span>
            <span className='block w-2 h-2 bg-green-600 rounded-full'></span>
          </p>
        </div>
      </div>
      <div className="flex items-center bg-slate-100 p-3 rounded-xl">
        <input
          type='text'
          placeholder='Tìm kiếm tin nhắn'
          className='rounded-lg bg-transparent outline-none'
        />
        <CiSearch size={30} fill='gray'/>
      </div>
      <div className='flex gap-x-4'>
        <div className="w-[50px] h-[50px] flex justify-center items-center border cursor-pointer rounded-xl rotate-90">
          <FaPhone size={30} fill='#00BFFF'/>
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center border cursor-pointer rounded-xl">
          <CiVideoOn size={30} fill='#00BFFF'/>
        </div>
      </div>
    </div>
  );
};

export default InboxChatHeader;
