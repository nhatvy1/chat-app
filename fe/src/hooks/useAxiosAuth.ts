'use client';
import { axiosInstanceAuth } from '@/axios/instance';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useAxiosAuth = () => {
  const { data: session } = useSession();
  console.log('Check session: ', session?.access_token)

  useEffect(() => {
    const requestIntercept = axiosInstanceAuth.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${session?.access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosInstanceAuth.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        // const prevRequest = error?.config;
        // if (error?.response.status === 401 && !prevRequest?.sent) {
        //   prevRequest.sent = true;
        //   // await refreshToken()
        //   prevRequest.headers[
        //     'Authorization'
        //   ] = `Bearer ${session?.access_token}`;
        //   return axiosInstanceAuth(prevRequest);
        // }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstanceAuth.interceptors.request.eject(requestIntercept);
      axiosInstanceAuth.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return axiosInstanceAuth
};
export default useAxiosAuth