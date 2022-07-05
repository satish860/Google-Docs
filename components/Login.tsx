import { Button } from "@material-tailwind/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center justify-center
    min-h-screen py-2"
    >
      <Image src="/login.png" width={300} height={200} objectFit={"contain"} />

      <Button
        color="blue"
        variant="filled"
        size="lg"
        onClick={() => signIn("google")}
        className="w-60"
      >
         Login with Google
      </Button>
    </div>
  );
};

export default Login;
