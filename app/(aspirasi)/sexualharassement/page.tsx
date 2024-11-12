"use client"
import { useState } from "react";


const Page = () => {
    const [isNameInputVisible, setIsNameInputVisible] = useState(false);
    const [name, setName] = useState('');

    const handleYesClick = () => {
        setIsNameInputVisible(true);
    };

    const handleNoClick = () => {
        
        window.location.href = '/form'; 
    };

    const handleKirimClick = () => {
        window.location.href = '/sexualharassement/form/' + name;
    }



    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center relative">
            <div className="space-y-12 max-w-lg mx-auto flex flex-col mt-12 z-10 text-center py-11">
                <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
                    Sexual Harassment
                </h3>
            </div>

            <div className="bg-[#d2c6b7] p-2 rounded-3xl max-w-md md:max-w-lg lg:max-w-3xl w-full flex justify-center flex-col">
                <h2 className="text-3xl font-semibold text-center text-[#161f77] mt-6">Apakah anda bersedia memberikan nama?</h2>
                    {isNameInputVisible && (
                        <div className="flex flex-col items-center space-y-6">
                            
                            <button className="bg-[#161f77] text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#273968] transition"
                            onClick={handleKirimClick}
                            >
                                Iya
                            </button>
                        </div>
                    )}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-3 md:mt-8 md:py-0 py-4">
                    <button 
                        onClick={handleYesClick} 
                        className="bg-[#161f77] text-white font-bold py-2 px-8 text-xl rounded-full hover:bg-[#273968] transition"
                    >
                        IYA
                    </button>
                    <button 
                        onClick={handleNoClick} 
                        className="bg-[#161f77] text-white font-bold py-2 px-8 text-xl rounded-full hover:bg-[#273968] transition"
                    >
                        TIDAK
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Page;
