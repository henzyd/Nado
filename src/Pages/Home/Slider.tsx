import React from "react";

const Slider = () => {
  const data = [
    {
      id: 1,
      image: "",
    },
    {
      id: 2,
      image: "",
    },
    {
      id: 3,
      image: "",
    },
    {
      id: 4,
      image: "",
    },
    {
      id: 5,
      image: "",
    },
    {
      id: 6,
      image: "",
    },
    {
      id: 7,
      image: "",
    },
    {
      id: 8,
      image: "",
    },
  ];
  return (
    <div
      id="Home-Slider"
      className=" bg-[#F0F0F0] mt-[3rem] grid grid-cols-HomeSlider gap-9 py-6 px-10 overflow-x-scroll"
    >
      {data.map((item) =>
        item.image ? (
          <figure
            className=" bg-white rounded-xl aspect-square overflow-hidden"
            key={item.id}
          >
            <img src={item.image} className=" w-full h-full" alt="slider-img" />
          </figure>
        ) : (
          <div
            key={item.id}
            className=" aspect-square bg-white rounded-xl grid place-content-center"
          >
            <p>Image</p>
          </div>
        )
      )}
    </div>
  );
};

export default Slider;
