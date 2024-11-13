import FormTertutup from '@/components/FormTertutup'
import React from 'react'

type Params = Promise<{type: string}>

const Page = async ({params}: {params: Params}) => {
    const {type} = await params
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
        <FormTertutup type={type} />
    </div>
  )
}

export default Page