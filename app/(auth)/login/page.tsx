"use client";
import Logo from '@/components/Logo'
import { useState } from 'react';

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="flex flex-col items-center justify-center w-screen md:pt-16 min-h-screen bg-cover bg-center relative">
      <Logo />
      <div className=' text-white space-y-2 font-bold mt-5 max-w-lg'>
        <div className='flex gap-2 bg-[#161f77] p-4 rounded-full px-5 border-2 border-orange-400'>
          <p className='w-24'>Email</p><p>:</p>
          <input type="email" className='bg-[#161f77] focus:border-none focus:outline-none'
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex gap-2 bg-[#161f77] p-4 rounded-full px-5 border-2 border-orange-400'>
          <p className='w-24'>Password</p><p>:</p>
          <input type="password" className='bg-[#161f77] focus:border-none focus:outline-none'
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
