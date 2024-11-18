"use client";
import Logo from "@/components/Logo";
import { loginUser, registerUser } from "@/lib/action";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push("/");
      }
    };
    checkSession();
  }, []);


  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    try {
      toast.loading("Logging in...");
      await loginUser(email, password);
      toast.dismiss();
      toast.success("User logged in successfully");
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes("NEXT_REDIRECT")) {
          toast.dismiss();
          toast.success("User logged in successfully");
        } else {
          toast.dismiss();
          toast.error(err.message);
        }
      } else {
        toast.dismiss();
        toast.error("An unknown error occurred");
      }
    }
  };
  const handleRegister = async () => {
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    try {
      toast.loading("Registering user...");
      await registerUser(email, password);
      toast.dismiss();
      toast.success("User registered successfully");
    } catch (err) {
      if (err instanceof Error) {
        toast.dismiss();
        toast.error(err.message);
      } else {
        toast.dismiss();
        toast.error("An unknown error occurred");
      }
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen md:pt-16 px-3 min-h-screen bg-cover bg-center relative">
      <Logo />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#161f77",
            fontWeight: "bold",
            background: "#E8E1D7",
          },
        }}
      />
      <div className="w-dvh px-4">
        <div className=" text-white text-xl space-y-2 font-bold md:mt-5 mt-5 md:max-w-lg max-w-sm">
          <div className="flex gap-2 bg-[#161f77] p-4 rounded-full px-5 border-2 border-orange-400  justify-between w-full">
            <p className="w-24">Email</p>
            <p>:</p>
            <input
              type="email"
              value={email}
              className="bg-[#161f77] focus:border-none md:w-52 w-40 focus:outline-none"
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
                className="bg-[#161f77] focus:border-none md:w-52 w-40 focus:outline-none"
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
    </div>
  );
};

export default Page;
