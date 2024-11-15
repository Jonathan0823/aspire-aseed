import { auth } from "@/auth"
import { redirect } from "next/navigation";

export const Page = async () => {
    const session = await auth();
    if (!session?.user?.id?.includes("admin")) {
      redirect("/");
    }
  return (
    <div>Admin Page</div>
  )
}
