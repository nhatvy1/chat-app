"use client";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='rounded-xl shadow-lg w-[360px] bg-white p-5'>
      <p className='text-center text-[#33CCFF] font-bold text-2xl mb-5'>
        Chat App - Đăng ký
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
                type={showPassword ? "text" : "password"}
                className='border-gray border outline-none w-full p-2 rounded-md'
              />
              {showPassword ? (
                <FaEye
                  fill='gray'
                  size={20}
                  className='absolute top-3 right-2 z-20 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaRegEyeSlash
                  ill='gray'
                  size={20}
                  className='absolute top-3 right-2 z-20 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <div className='my-2'>
            <label className='' htmlFor='password'>
              Xác nhận mật khẩu
            </label>
            <div className='relative'>
              <input
                id='password'
                type={showPassword ? "text" : "password"}
                className='border-gray border outline-none w-full p-2 rounded-md'
              />
              {showPassword ? (
                <FaEye
                  fill='gray'
                  size={20}
                  className='absolute top-3 right-2 z-20 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaRegEyeSlash
                  ill='gray'
                  size={20}
                  className='absolute top-3 right-2 z-20 cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <div>
            <label htmlFor=''>Ảnh đại diện</label>
            <input
              type='file'
              className='block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    '
            />
          </div>
          <div className='flex justify-center mt-3'>
            <button className='bg-[#33CCFF] p-2 w-full rounded-md text-white'>
              Đăng ký
            </button>
          </div>
        </form>
      </div>
      <p className='mt-3'>
        Đã có tài khoản{" "}
        <Link href='login' className='text-[#33CCFF]'>
          Đăng nhập
        </Link>
      </p>
    </div>
  );
};

export default Register;
