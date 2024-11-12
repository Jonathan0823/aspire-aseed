import Link from "next/link";

const page = () => {
    const menu = [
        {
            title: "Fasilitas Kampus",
            link: "aspirasiterbuka/fasilitaskampus"
        },
        {
            title: "Kebersihan",
            link: "aspirasiterbuka/kebersihan"
        },
        {
            title: "Keamanan",
            link: "aspirasiterbuka/keamanan"
        },
        {
            title: "Akademik",
            link: "aspirasiterbuka/akademik"
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
            <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
                <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
                     Aspirasi Terbuka
                 </h3>
            </div>

            <div className="bg-[#d2c6b7] p-2 xl:p-24 rounded-3xl max-w-md md:max-w-lg lg:max-w-3xl w-full flex justify-center flex-col">
                <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-8 text-center text-[#161f77] ">Konteks Keluhan</h2>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-20 mx-auto mt-2 pb-5">
                    {menu.map((item, index) => (
                        <Link key={index} href
                        ={item.link} className="bg-[#ececec] hover:bg-gray-300 text-[#161f77] font-semibold py-2 px-1 md:w-auto w-44 md:py-2 md:px-8 text-center text-sm  md:text-2xl rounded-full">
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
