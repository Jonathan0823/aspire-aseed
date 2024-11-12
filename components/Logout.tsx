"use client";
import { logoutUser } from "@/lib/action";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Logout = () => {
  const handleLogout = async () => {
    await logoutUser();
    toast.success("User logged out successfully");
  };
  return (
    <>
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
      <button
        className="text-blue-900 font-bold hover:text-blue-600"
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    </>
  );
};

export default Logout;
