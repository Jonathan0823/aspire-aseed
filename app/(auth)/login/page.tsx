"use client";
import Logo from "@/components/Logo";
import { registerUser } from "@/lib/action";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    console.log(email, password);
  };
  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      toast.success('User registered successfully');
    }  catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error('An unknown error occurred');
      }
    }
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen md:pt-16 min-h-screen bg-cover bg-center relative">
      <Logo />
      <Toaster />
      <div className=" text-white text-xl space-y-2 font-bold md:mt-5 mt-20 md:max-w-lg max-w-sm">
        <div className="flex gap-2 bg-[#161f77] p-4 rounded-full px-5 border-2 border-orange-400  justify-between w-full">
          <p className="w-24">Email</p>
          <p>:</p>
          <input
            type="email"
            value={email}
            className="bg-[#161f77] focus:border-none w-52 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-2 bg-[#161f77] p-4 rounded-full px-5 border-2 border-orange-400  justify-between w-full">
          <p className="w-24">Password</p>
          <p>:</p>
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              className="bg-[#161f77] focus:border-none w-52 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute right-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-3">
          <button
            className="bg-[#161f77] w-32 p-3 rounded-full px-5 border-2 border-orange-400"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-[#161f77] p-3 w-32 rounded-full px-5 border-2 border-orange-400"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
