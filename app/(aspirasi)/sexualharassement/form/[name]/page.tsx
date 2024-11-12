"use client"
import { useRouter } from 'next/router';

const Page = () => {
    const router = useRouter();
    const { name } = router.query;
  return (
    <div>{name}</div>
  )
}

export default Page