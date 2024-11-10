import Logo from '@/components/Logo'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen md:pt-16 min-h-screen bg-cover bg-center relative">
      <Logo />
      <form className="bg-[#161f77] w-96 p-10 rounded-lg shadow-2xl mt-12">
        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            className="bg-white text-lg text-black focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none py-4 px-4 block w-full rounded-md font-montserrat"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="bg-white text-lg text-black focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none py-4 px-4 block w-full rounded-md font-montserrat"
          />
        </div>
        <div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-3 px-4 rounded-md transition duration-200">
            Login
          </button>
        </div>
        <p className="text-white text-center mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-400 hover:text-blue-600 underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  )
}

export default page
