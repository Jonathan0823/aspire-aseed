const page = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
            <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
                <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
                     Aspirasi Terbuka
                 </h3>
            </div>

            <div className="bg-[#d2c6b7] p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-3xl w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-[#161f77] mt-6">Konteks Keluhan</h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8">
                    <button className="bg-[#ececec] hover:bg-gray-300 text-[#161f77] font-bold py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 text-sm sm:text-lg md:text-xl rounded-lg">
                        Fasilitas Kampus
                    </button>
                    <button className="bg-[#ececec] hover:bg-gray-300 text-[#161f77] font-bold py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 text-sm sm:text-lg md:text-xl rounded-lg">
                        Kebersihan
                    </button>
                    <button className="bg-[#ececec] hover:bg-gray-300 text-[#161f77] font-bold py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 text-sm sm:text-lg md:text-xl rounded-lg">
                        Keamanan
                    </button>
                    <button className="bg-[#ececec] hover:bg-gray-300 text-[#161f77] font-bold py-4 px-6 sm:py-5 sm:px-7 md:py-6 md:px-8 text-sm sm:text-lg md:text-xl rounded-lg">
                        Akademik
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
