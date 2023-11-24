'use client'
import { useState } from "react";
import InboxHeader from "./InboxHeader";
import InBoxUser from "./InboxUser";

const InboxLayout = () => {
  const [choose, setChoose] = useState<number>(-1)

  const chooseUser = (id: number)=> {
    setChoose(id)
  }

  return (
    <div className='basis-[30%] p-5 overflow-auto'>
      <InboxHeader />
      <div className='flex flex-col'>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
          <div className={index === 11 ? "order-first" : ""} key={index}>
            <InBoxUser item={item}
             fullName={`Huỳnh Vỹ ${item}`} choose={choose} chooseUser={chooseUser}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InboxLayout;
