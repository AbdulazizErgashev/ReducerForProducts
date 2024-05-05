import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Datas } from "../context/Context";

export default function Homework() {
  const { reduceData, dispatch } = useContext(Datas);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-5 gap-x-3 gap-y-3 py-10">
          {reduceData.products.map((item) => (
            <div
              className="flex flex-col items-center gap-y-3 p-5 border-2 border-[#7fad39]"
              key={item.id}
            >
              <div className="flex items-center gap-x-36">
                <h1 className="bg-[#7FAD39] text-[#fff] text-[0.75rem]/[1.9rem] font-extrabold px-2">
                  {item.skidka}
                </h1>

                <div className="bg-[#D8E6C3] rounded-full cursor-pointer">
                  <FaRegHeart
                    className={`text-[#7FAD39] p-2 text-4xl ${
                      item.liked ? "bg-red-500 text-white rounded-full" : ""
                    }`}
                    onClick={() =>
                      dispatch({ type: "liked", payload: item.id })
                    }
                  />
                </div>
              </div>
              <img src={item.img} alt="..." />
              <h1 className="text-[#aaa] text-xs font-bold">{item.quality}</h1>
              <h1 className="text-[#2A2A2A] font-semibold">{item.title}</h1>
              <div className="flex items-center gap-x-1">
                <p className="text-[#7FAD39] font-semibold">{item.newPrice}</p>
                <del className="text-[#aaa] font-semibold">{item.oldPrice}</del>
              </div>
              <div className="flex items-center gap-x-32">
                <div className="flex items-center gap-x-3">
                  <button
                    onClick={() =>
                      dispatch({ type: "minus", payload: item.id })
                    }
                    className="bg-[#2A2A2A] text-[#fff] px-3 py-1"
                  >
                    -
                  </button>
                  <p className="text-xs font-semibold">{item.count}</p>
                  <button
                    onClick={() => dispatch({ type: "plus", payload: item.id })}
                    className="bg-[#2A2A2A] text-[#fff] px-3 py-1"
                  >
                    +
                  </button>
                </div>
                <MdOutlineShoppingCart
                  className="text-[#A9A9A9] text-2xl cursor-pointer"
                  onClick={() => dispatch({ type: "addToCart", payload: item })}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
