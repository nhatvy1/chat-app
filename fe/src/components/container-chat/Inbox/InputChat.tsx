import { BsSend } from "react-icons/bs";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";

const InputChat = () => {
  return (
    <div className='absolute bottom-0 w-full border-t p-5'>
      <form className="flex justify-between items-center gap-x-3">
        <div className="basis-3/4">
          <input placeholder='Aa' className="w-full h-fit outline-none text-sm"/>
        </div>
        <div className="flex justify-end items-center gap-x-4 basis-1/4">
          <div>
						<label htmlFor="file" className="bg-slate-100 border w-[40px] h-[40px] rounded-md flex justify-center items-center cursor-pointer">
						<LuImagePlus size={20} />
						</label>
            <input type='file' id="file" className="hidden"/>
          </div>
          <div className="bg-slate-100 border w-[40px] h-[40px] rounded-md flex justify-center items-center cursor-pointer">
            <MdOutlineKeyboardVoice size={20} fill='gray'/>
          </div>
          <div>
            <button type="submit" className="bg-[#33ccff] h-[40px] w-[40px] flex justify-center items-center rounded-md">
              <BsSend size={20} fill='white'/>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputChat;
