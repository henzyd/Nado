import React from "react";

const Lorem = () => {
  return (
    <div id="Home-Lorem" className="w-full mt-20 mb-20 flex flex-col gap-8">
      <h1 className=" px-20 text-3xl font-bold flex justify-center">Lorem</h1>
      <div className="bg-[#E7E7E7] px-20">
        <main className="grid grid-cols-2 bg-transparent gap-12 overflow-hidden ">
          <div className=" w-full flex items-start p-4 py-10 gap-4 relative">
            <div className="bg-[#CECECE] absolute h-[130%] w-[280px] top-[-62px] left-[120px] rotate-[16deg] "></div>
            <div className="mt-20 flex flex-col gap-4 relative z-[1] self-start">
              <h2 className="font-medium text-3xl">Lorem Ipsum</h2>
              <p className="font-nomal text-lg">
                Something very long Like a long body text...
              </p>
            </div>
            <div className="bg-white flex justify-center items-center w-[70%] h-[310px] relative z-[1] self-end">
              <h4 className="font-semibold text-3xl text-[#000000e4]">Image</h4>
            </div>
          </div>
          <div className=" w-full flex items-start flex-col p-4 py-10 gap-4 relative">
            <div className="bg-[#CECECE] absolute h-[130%] w-[280px] top-[-62px] left-[120px] rotate-[16deg] "></div>
            <div className="mt-8 flex flex-col gap-4 relative z-[1]">
              <h2 className="font-medium text-3xl">Lorem Ipsum</h2>
              <p className="font-nomal text-lg">
                Something very long Like a long body text...
              </p>
            </div>
            <div className="bg-white flex justify-center items-center w-[70%] h-[210px] self-end relative z-[1]">
              <h4 className="font-semibold text-3xl text-[#000000e4]">Image</h4>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lorem;
