import React from "react";
import Button from "../components/Button";

const Home = () => {
  return (
    <div id="Home" className="px-12">
      <div
        className={
          "bg-HomeIntro flex justify-center items-center rounded-2xl py-6 px-4"
        }
      >
        <div className={"flex items-center justify-center flex-col gap-8"}>
          <h1 className=" font-bold text-5xl text-white text-center w-[75%]">
            Big intro or advert of your product
          </h1>
          <div
            className={
              "grid grid-cols-3 justify-center items-center rounded-xl w-full"
            }
          >
            <input type="text" placeholder="Lorem Ipsum" className=" w-full" />
            {/* <span className=" bg-[#848484] w-[0.2rem] h-12 rounded-full"></span> */}
            <input type="text" placeholder="Lorem Ipsum" className=" w-full" />
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
