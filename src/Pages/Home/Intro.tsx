import Button from "../../components/Button";
import Input from "../../components/Input";

const Intro = () => {
  return (
    <div className="px-20">
      <div
        className={
          "bg-HomeIntro flex justify-center items-center rounded-2xl py-20 pt-[10rem] px-4 relative"
        }
      >
        <h2 className=" absolute text-4xl font-bold text-[#FFFFFF80] top-16 left-16">
          Bg image <br /> of farm
        </h2>
        <div className={"flex items-center justify-center flex-col gap-12"}>
          <h1 className=" font-bold text-5xl leading-[3.4rem] text-white text-center w-[75%]">
            Big intro or advert of your product
          </h1>
          <div
            className={
              " flex justify-center items-center rounded-full w-full h-14 bg-white"
            }
          >
            <Input className="w-full h-full placeholder:text-center rounded-l-full text-center placeholder:text-[#373737]" />
            <span className=" bg-[#848484] w-[0.2rem] h-9 rounded-full"></span>
            <Input className="w-full h-full placeholder:text-center text-center placeholder:text-[#373737]" />
            <Button className=" h-full font-semibold text-xl rounded-r-full">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
