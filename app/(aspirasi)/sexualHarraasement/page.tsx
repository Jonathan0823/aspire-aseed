"use client"
import { useState } from "react";


const page = () => {
    const [isNameInputVisible, setIsNameInputVisible] = useState(false);

    const handleYesClick = () => {
        setIsNameInputVisible(true);
    };

    const handleNoClick = () => {
        
        window.location.href = '/next-page'; 
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
            <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
                <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
                    Sexual Harassment
                </h3>
            </div>

            <div className="bg-[#d2c6b7] p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-3xl w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center text-[#161f77] mt-6">Apakah anda bersedia memberikan nama?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8">
                    <button 
                        onClick={handleYesClick} 
                        className="bg-[#161f77] text-white font-bold py-4 px-8 text-lg rounded-lg hover:bg-[#273968] transition"
                    >
                        IYA
                    </button>
                    <button 
                        onClick={handleNoClick} 
                        className="bg-[#161f77] text-white font-bold py-4 px-8 text-lg rounded-lg hover:bg-[#273968] transition"
                    >
                        TIDAK
                    </button>
                </div>

                {isNameInputVisible && (
                    <div className="flex flex-col items-center space-y-6 mt-6">
                        <input 
                            type="text" 
                            placeholder="Masukkan Nama" 
                            className="w-80 sm:w-96 p-4 text-lg rounded-lg border-2 border-[#161f77] focus:outline-none focus:ring-2 focus:ring-[#161f77]"
                        />
                        <button className="bg-[#161f77] text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#273968] transition">
                            Kirim
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default page;
