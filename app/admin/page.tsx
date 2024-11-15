import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async () => {
  const session = await auth();
  if (!session?.user?.id?.includes("admin")) {
    redirect("/");
  }
return (
  <div>Admin Page</div>
)
}

export default page