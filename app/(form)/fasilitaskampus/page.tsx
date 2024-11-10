// pages/index.js

export default function Home() {
    return (
      <div className="relative h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center w-screen px-4 pt-20">
          <h2 className="bg-[#040180] border border-white text-2xl text-white rounded-full py-2 px-20 inline-block font-bold mb-4">
            Aspirasi Terbuka
          </h2>
  
          <div className="bg-[#d2c6b7] bg-opacity-90 rounded-lg p-8 md:max-w-xl w-full text-left py-12 space-y-6">
            <div className="text-[#161f77] flex flex-row items-center space-x-4 bg-[#ececec] hover:bg-gray-300 font-bold px-4 py-2 text-sm sm:text-lg md:text-xl rounded-lg">
              Fasilitas Kampus
            </div>
  
           
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Nama</p>
                <p>:</p>
                <input
                  type="text"
                  className="bg-[#d2c6b7] w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
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
                  className="bg-[#d2c6b7] w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
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
                  className="border bg-[#d2c6b7] w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
                  placeholder="Masukkan Angkatan"
                />
              </div>
            </div>
  
           
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Detail Keluhan</p>
                <p>:</p>
                <textarea
                  className="bg-[#d2c6b7] w-full sm:w-52 focus:outline-none p-2 rounded-full"
                  placeholder="Masukkan Detail Keluhan"
                ></textarea>
              </div>
            </div>
  
            
            <div className="text-[#161f77] text-xl space-y-2 font-bold md:mt-5 mt-5 w-full max-w-md">
              <div className="flex gap-2 p-4 rounded-full px-5 justify-between w-full">
                <p className="w-24">Bukti Keluhan</p>
                <p>:</p>
                <input
                  type="file"
                  className="bg-[#d2c6b7] w-full sm:w-52 focus:outline-none px-3 py-2 rounded-full"
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
  }
  