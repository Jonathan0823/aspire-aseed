
type Params = Promise<{name: string}>

const Page = async ({params}: {params: Params}) => {
 const {name} = await params
  return (
    <div>{name}</div>
  )
}

export default Page