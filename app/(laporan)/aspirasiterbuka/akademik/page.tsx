const page = () => {
    return (
      <div className="relative h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-screen px-4 pt-20">
          <h3 className="w-80 py-3 text-lg sm:text-xl md:text-2xl text-center mb-5 lg:text-3xl text-white font-bold rounded-full bg-[#273968] shadow-md hover:bg-[#1D2A56] border-2">
            Aspirasi Terbuka
          </h3>
  
          <div className="bg-[#d2c6b7] bg-opacity-90 overflow-y-auto rounded-lg max-h-[500px] hide-scrollbar p-8 md:max-w-xl w-full text-left py-12 space-y-6">
            <div className="text-[#161f77]">
              <div className="bg-[#ececec] hover:bg-gray-300 font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg inline-block">
                Akademik
              </div>
            </div>
  
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Nama</p>
                <p>:</p>
                <input
                  type="text"
                  className=" w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
                  placeholder="Masukkan Nama"
                />
              </div>
            </div>
  
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Kelas</p>
                <p>:</p>
                <input
                  type="text"
                  className=" w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
                  placeholder="Masukkan Kelas"
                />
              </div>
            </div>
  
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full ">
                <p className="w-24">Angkatan</p>
                <p>:</p>
                <input
                  type="text"
                  className="border  w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
                  placeholder="Masukkan Angkatan"
                />
              </div>
            </div>
  
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Detail Keluhan</p>
                <p>:</p>
                <textarea
                  className=" w-full sm:w-52 focus:outline-none p-2 rounded-full"
                  placeholder="Detail Keluhan"
                ></textarea>
              </div>
            </div>
  
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Bukti Keluhan</p>
                <p>:</p>
                <input
                  type="file"
                  className=" w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
                />
              </div>
            </div>
  
            <div className="flex justify-center mt-6">
              <button className="bg-[#040180] text-white py-2 px-6 rounded-lg hover:bg-[#030e64] focus:outline-none">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default page;
  