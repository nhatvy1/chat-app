"use client";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  console.log("Check session profile: ", session);
  return <h1>Profile</h1>;
};

export default Profile;
