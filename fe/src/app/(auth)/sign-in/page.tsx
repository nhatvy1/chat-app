'use client';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

interface formState {
  email: string;
  password: string;
}

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [formData, setFormData] = useState<formState>({
    email: '',
    password: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true)
    const signInResult = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false,
      callbackUrl: searchParams?.get('callbackUrl') || '/',
    });

    setIsLoading(false);

    if (!signInResult?.ok && signInResult?.status) {
      toast.error(signInResult.error)
    }

    if (signInResult?.ok && signInResult?.url) {
      toast.info('Đăng nhập thành công')
      router.push(signInResult.url);
    }
  };

  return (
    <div className="rounded-xl shadow-lg w-[360px] bg-white p-5">
      <p className="text-center text-[#33CCFF] font-bold text-2xl mb-5">
        Chat App - Đăng nhập
      </p>

      {isLoading && <div className="w-[40px] h-[40px] bg-yellow-300"></div>}

      <div>
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label className="" htmlFor="email">
              Tài khoản
            </label>
            <input
              id="email"
              type="text"
              className="border-gray border outline-none w-full p-2 rounded-md"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={(event) =>
                setFormData((prev) => ({
                  ...prev,
                  email: event.target.value,
                }))
              }
            />
          </div>
          <div className="my-2">
            <label className="" htmlFor="password">
              Mật khẩu
            </label>
            <div className="relative mb-14">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="absolute top-0 left-0 w-full border-gray border outline-none p-2 rounded-md z-10"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }))
                }
              />
              {showPassword ? (
                <span onClick={() => setShowPassword(false)}>
                  <FaEye
                    fill="gray"
                    size={20}
                    className="absolute top-3 right-2 z-20 cursor-pointer"
                  />
                </span>
              ) : (
                <span onClick={() => setShowPassword(true)}>
                  <FaRegEyeSlash
                    fill="gray"
                    size={20}
                    className="absolute top-3 right-2 z-20 cursor-pointer"
                  />
                </span>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#33CCFF] p-2 w-full rounded-md text-white">
              {isLoading ? 'Dang dang nhap' : 'Dang nhap'}
            </button>
          </div>
        </form>
      
      </div>
      <p className="mt-3">
        Chưa có tài khoản
        <Link href={'/register'} className="text-[#33CCFF]">
          {' '}
          Đăng ký nhanh
        </Link>
      </p>
    </div>
  );
};

export default Login;
