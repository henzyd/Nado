import React from "react";
import cardData from "../../utils/cardData.json";

type CardDataProp = {
  cardData: {
    id: number;
    title: string;
    image: string;
    new: boolean;
    price: number;
    discount?: number;
    previousPrice?: number;
  };
};

const TopItems = () => {
  return (
    <div
      id="Top-Items"
      className=" flex flex-col gap-8 items-center p-8 mt-8 px-9"
    >
      <h1 className=" font-bold text-2xl">Our Top Items</h1>

      <main className=" w-full grid grid-cols-HomeTopItems gap-6">
        {cardData.map((item) => (
          <Card cardData={item} key={item.id} />
        ))}
      </main>
    </div>
  );
};

const Card = ({ cardData }: CardDataProp) => {
  return (
    <div
      id="Item-Card"
      className="flex flex-col border border-[#A1A1A1] rounded-xl overflow-hidden"
    >
      <div
        className="w-full border-b border-[#A1A1A1] h-40 relative"
        id="product-image-container"
      >
        <div className="flex items-center justify-between absolute w-full top-2 pr-2">
          {cardData.new ? (
            <span className=" bg-HomeTopItemsNew pl-4 pr-2 rounded-tr-[0.3rem] rounded-br-[0.3rem] text-white text-xs py-[0.1rem]">
              <p>New</p>
            </span>
          ) : (
            <span></span>
          )}
          {cardData.discount && (
            <span className="bg-[#D9D9D9] text-xs">
              <p>{cardData.discount}%</p>
            </span>
          )}
        </div>
        {cardData.image ? (
          <figure className="w-full h-full">
            <img
              className=" object-cover w-full h-full"
              src={cardData.image}
              alt="product-image"
            />
          </figure>
        ) : (
          <h3 className=" absolute top-[50%] font-medium text-2xl left-[50%] translate-x-[-50%] translate-y-[-50%]">
            Image
          </h3>
        )}
      </div>
      <div className="w-full p-3" id="product-info">
        <h4 className=" text-[1rem]">{cardData.title}</h4>
        <h3 className=" text-[1.2rem]">₦{cardData.price}</h3>
        {cardData.previousPrice && (
          <p className=" text-[0.9rem]">
            ₦ <span className=" line-through">{cardData.previousPrice}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default TopItems;
