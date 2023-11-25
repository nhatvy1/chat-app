// "use client";

// import { axiosCustom } from "@/axios/instance";
// import { signIn, useSession } from "next-auth/react";

// export const useRefreshToken = () => {
//   const { data: session } = useSession();

//   const refreshToken = async () => {
//     const res:any = await axiosCustom.post("/auth/refresh", {
//       refresh: session?.refresh_token,
//     });

//     if (session) session?.refresh_token = res.data.access_token;
//     else signIn();
//   };
//   return refreshToken;
// };
