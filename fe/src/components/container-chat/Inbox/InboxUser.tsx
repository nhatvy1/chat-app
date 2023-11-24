import Image from "next/image";

interface Props {
  item: number;
  fullName: string;
  messageNew?: string;
  numberMessageNew?: number;
  choose: number;
  chooseUser: (id: number) => void;
}

// bg-[#ebf5ff] -- màu của user khi được onClick

const User = ({
  item,
  fullName,
  messageNew,
  numberMessageNew,
  choose,
  chooseUser,
}: Props) => {
  return (
    <div
      className={`flex items-center gap-x-4 my-3 p-2 border rounded-xl cursor-pointer hover:bg-slate-100 ${
        choose === item ? "bg-[#ebf5ff]" : ""
      }`}
      onClick={() => chooseUser(item)}
    >
      <div className='basis-1/6'>
        <Image
          src='/avatar.jpg'
          alt='loi-anh'
          width={50}
          height={50}
          className='bg-center bg-contain w-full h-full rounded-full'
        />
        {/* <div className='w-[70px] h-[70px] flex justify-center items-center bg-slate-300 rounded-full font-bold text-2xl'>
          V
        </div> */}
      </div>
      <div className='basis-5/6 gap-y-2 flex flex-col'>
        <p className='font-medium line-clamp-1'>{fullName}</p>
        <p className='text-sm line-clamp-1'>Hi 👋, tôi là chat app realtime</p>
      </div>
    </div>
  );
};

export default User;
