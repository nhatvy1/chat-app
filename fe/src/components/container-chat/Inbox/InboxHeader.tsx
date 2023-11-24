import { GoPlus } from "react-icons/go";

const InboxHeader = () => {
  return (
    <>
      <div className='flex justify-between items-center mb-5'>
        <h1 className='text-2xl font-medium'>Inbox</h1>
        <div className='p-1 border rounded-xl cursor-pointer'>
          <GoPlus size={30} />
        </div>
      </div>
      <div className='flex bg-slate-200 p-1 rounded-xl'>
        <button className='basis-1/2 p-1 bg-white rounded-xl'>General</button>
        <button className='basis-1/2 p-1 text-gray-500'>Total</button>
      </div>
    </>
  );
};
export default InboxHeader;
