import React, { useContext } from "react";
import { Datas } from "../context/Context";
import { MdDelete } from "react-icons/md";

export default function CartTable() {
  const { reduceData, dispatch } = useContext(Datas);

  return (
    <>
      <div className="container">
        <h1 className="text-slate-700 font-mono font-bold text-3xl">
          <span className="text-[#7FAD39]">#</span>CartTable
        </h1>
        <div className="py-10">
          <table className="border-4 border-[#7FAD39] w-[100%] text-center">
            <thead>
              <tr>
                <th className="border border-[#7FAD39] py-3">№</th>
                <th className="border border-[#7FAD39]">Nomi</th>
                <th className="border border-[#7FAD39]">Narxi</th>
                <th className="border border-[#7FAD39]">Chegirma</th>
                <th className="border border-[#7FAD39]">Soni</th>
                <th className="border border-[#7FAD39]">Rasmi</th>
                <th className="border border-[#7FAD39]">
                  <button
                    className="text-red-700 font-black"
                    onClick={() => dispatch({ type: "deleteAll" })}
                  >
                    Delete all
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {reduceData.cart.length ? (
                reduceData.cart.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th className="border border-[#7FAD39]">{index + 1}</th>
                      <td className="border border-[#7FAD39]">{item.title}</td>
                      <td className="border border-[#7FAD39]">
                        {item.newPrice}
                      </td>
                      <td className="border border-[#7FAD39]">{item.skidka}</td>
                      <td className="border border-[#7FAD39]">{item.count}</td>
                      <td className="border border-[#7FAD39]">
                        <img
                          src={item.img}
                          alt="..."
                          className="w-20 m-auto py-3"
                        />
                      </td>
                      <td className="border border-[#7FAD39]">
                        <button
                          className="text-[red] text-2xl"
                          onClick={() =>
                            dispatch({ type: "delete", payload: item.id })
                          }
                        >
                          <MdDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <th colSpan={100} className="text-center py-5">
                    Hech qanday mahsulot qoshilmadi...
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
