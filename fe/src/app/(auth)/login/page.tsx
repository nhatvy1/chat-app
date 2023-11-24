import Link from "next/link";
import { FaEye } from "react-icons/fa";

const Login = () => {
  return (
    <div className='rounded-xl shadow-lg w-[360px] bg-white p-5'>
      <p className='text-center text-[#33CCFF] font-bold text-2xl mb-5'>
        Chat App - Đăng nhập
      </p>
      <div>
        <form>
          <div className='my-2'>
            <label className='' htmlFor='username'>
              Tài khoản
            </label>
            <input
              id='username'
              type='text'
              className='border-gray border outline-none w-full p-2 rounded-md'
            />
          </div>
          <div className='my-2'>
            <label className='' htmlFor='password'>
              Mật khẩu
            </label>
            <div className='relative'>
              <input
                id='password'
                type='text'
                className='border-gray border outline-none w-full p-2 rounded-md'
              />
              <FaEye
                fill='gray'
                size={20}
                className='absolute top-3 right-2 z-20'
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='bg-[#33CCFF] p-2 w-full rounded-md text-white'>
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
      <p className='mt-3'>
        Chưa có tài khoản
        <Link href={"/register"} className='text-[#33CCFF]'>
          {" "}
          Đăng ký nhanh
        </Link>
      </p>
    </div>
  );
};

export default Login;
