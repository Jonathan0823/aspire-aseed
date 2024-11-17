import React from 'react'

type Params = Promise<{ id: string }>;

const page = async ({params}: {params: Params}) => {
    const { id } = await params;
  return (
    <div>{id}</div>
  )
}

export default page