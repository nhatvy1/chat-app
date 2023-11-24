import { BsThreeDots } from "react-icons/bs";
import { CiBellOff, CiTrash } from "react-icons/ci";
import { FaExclamation } from "react-icons/fa";

const Setting = () => {
  return (
    <div className='basis-[10%] p-5 mx-auto flex flex-col items-center justify-between'>
      <div className='p-1 rounded-xl w-fit border cursor-pointer'>
        <BsThreeDots size={40} fill='gray'/>
      </div>
      <div className='flex flex-col gap-y-4'>
        <div className='p-1 rounded-xl w-fit border cursor-pointer'>
          <FaExclamation size={40} fill='gray'/>
        </div>
        <div className='p-1 rounded-xl w-fit border cursor-pointer'>
          <CiBellOff size={40} fill='gray'/>
        </div>
        <div className='p-1 rounded-xl w-fit border cursor-pointer'>
          <CiTrash size={40} fill='gray'/>
        </div>
      </div>
    </div>
  );
};

export default Setting;
