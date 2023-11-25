'use client'
import { useEffect, useState } from "react";
import InboxHeader from "./InboxHeader";
import InBoxUser from "./InboxUser";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { useSession } from "next-auth/react";


interface listUser {
  id: string
  fullName: string
  email: string
  phone: string
  status: string
}

const InboxLayout = () => {
  const [choose, setChoose] = useState<number>(-1)
  const [listUser, setListUser] = useState<any>([])

  const axiosAuth = useAxiosAuth()
  const { data: session} = useSession()
  
  const chooseUser = (id: number)=> {
    setChoose(id)
  } 

  const fetchListUser = async ()=> {
    const response: any = await axiosAuth.get('/user/find-all')
    setListUser(response.result)
  }

  useEffect(()=> {
    fetchListUser()
  }, [session])

  return (
    <div className='basis-[30%] p-5 overflow-auto'>
      <InboxHeader />
      <div className='flex flex-col'>
        {listUser.map((item: any, index: any)=> (
          <div className={index === 11 ? "order-first" : ""} key={index}>
          <InBoxUser item={index}
           fullName={item.fullName} choose={choose} chooseUser={chooseUser}/>
        </div>
        ))}
      </div>
    </div>
  );
};

export default InboxLayout;
