import React, { createContext, useReducer } from "react";
import Shaftoli from "../img/shaftoli.png";
import Bodring from "../img/bodring.png";
import Yongoq from "../img/yongoq.png";
import Broklin from "../img/brokliyn.png";
import Nok from "../img/nok.png";
import Bir from "../img/second/bir.png";
import Ikki from "../img/second/ikki.png";
import Uch from "../img/second/uch.png";
import Tort from "../img/second/tort.png";
import Besh from "../img/second/besh.png";
import Olti from "../img/second/olti.png";
import Yetti from "../img/second/yetti.png";
import Sakkiz from "../img/second/sakkiz.png";
import Toqqiz from "../img/second/toqqiz.png";
import On from "../img/second/on.png";
import Swal from "sweetalert2";

export const Datas = createContext();

export default function DatasProvider({ children }) {
  const reducer = (state, action) => {
    let { type, payload } = action;

    switch (type) {
      case "plus":
        // let element = state.products.find((item) => item.id === payload);
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === payload ? { ...item, count: item.count + 1 } : item
          ),
        };

      case "minus":
        let min_elem = state.products.find((item) => item.id === payload);

        if (min_elem.count > 0) {
          state = {
            ...state,
            products: state.products.map((item) =>
              item.id === payload ? { ...item, count: item.count - 1 } : item
            ),
          };
        }
        return state;

      case "liked":
        return {
          ...state,
          products: state.products.map((item) =>
            item.id === payload ? { ...item, liked: !item.liked } : item
          ),
        };

      // case "addToCart":
      //   if (!state.cart.find((c) => c.id === payload.id)) {
      //     return {
      //       ...state,
      //       cart: [...state.cart, payload],
      //     };
      //   } else {
      //     return {
      //       ...state,
      //       cart: state.cart.map((p) =>
      //         p.id === payload.id ? { ...p, count: p.count + 1 } : p
      //       ),
      //     };
      //   }

      case "addToCart":
        // Check if the product is already in the cart
        let existingProduct = state.cart.find((c) => c.id === payload.id);

        if (!existingProduct) {
          // If the product is not in the cart, add it with the count of 1
          return {
            ...state,
            cart: [...state.cart, { ...payload, count: 1, addedToCart: true }],
          };
        } else {
          // If the product is already in the cart, increase its count and set the addedToCart flag
          return {
            ...state,
            cart: state.cart.map((p) =>
              p.id === payload.id
                ? { ...p, count: p.count + 1, addedToCart: true }
                : p
            ),
          };
        }

      // case "delete":
      //   Swal.fire({
      //     title: "Mahsulot savatdan ochirilsinmi?",
      //     // text: "You won't be able to revert this!",
      //     icon: "warning",
      //     showCancelButton: true,
      //     confirmButtonColor: "#3085d6",
      //     cancelButtonColor: "#d33",
      //     confirmButtonText: "Yes!",
      //   }).then((result) => {
      //     if (result.isConfirmed) {
      //       let newState = {
      //         ...state,
      //         cart: state.cart.filter((item) => item.id !== payload),
      //       };
      //       Swal.fire({
      //         title: "O'chirildi!",
      //         // text: "Your file has been deleted.",
      //         icon: "success",
      //       });
      //       return newState;
      //     } else {
      //       return state;
      //     }
      //   });

      // mahsulot delete action
      case "delete":
        let confirmed = window.confirm("Mahsulot savatdan ochirilsinmi?");
        if (confirmed) {
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== payload),
          };
        } else {
          return state;
        }

      case "deleteAll":
        let confAll = window.confirm("Hamma mahsulotlar o'chirilsinmi?");
        if (confAll) {
          return {
            ...state,
            cart: [],
          };
        } else {
          return state;
        }

      default:
        return state;
    }
  };

  let [reduceData, dispatch] = useReducer(reducer, {
    products: [
      {
        id: 1,
        skidka: "15%Off",
        img: Shaftoli,
        quality: "Available(in stock)",
        title: "Fresh organic apricot",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 2,
        skidka: "15%Off",
        img: Bodring,
        quality: "Available(in stock)",
        title: "Cucumber",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 3,
        skidka: "15%Off",
        img: Yongoq,
        quality: "Available(in stock)",
        title: "Hazelnuts filbert nut",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 4,
        skidka: "15%Off",
        img: Broklin,
        quality: "Available(in stock)",
        title: "Raw Broccoli",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 5,
        skidka: "15%Off",
        img: Nok,
        quality: "Available(in stock)",
        title: "Organic quince",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 6,
        skidka: "15%Off",
        img: Bir,
        quality: "Available(in stock)",
        title: "Red Apple",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 7,
        skidka: "15%Off",
        img: Ikki,
        quality: "Available(in stock)",
        title: "Capsicum-green",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 8,
        skidka: "15%Off",
        img: Uch,
        quality: "Available(in stock)",
        title: "Pear fruit",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 9,
        skidka: "15%Off",
        img: Tort,
        quality: "Available(in stock)",
        title: "Blueberry",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 10,
        skidka: "15%Off",
        img: Besh,
        quality: "Available(in stock)",
        title: "Fresh raspberry",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 11,
        skidka: "15%Off",
        img: Olti,
        quality: "Available(in stock)",
        title: "Ginger",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 12,
        skidka: "15%Off",
        img: Yetti,
        quality: "Available(in stock)",
        title: "Two fresh figs",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 13,
        skidka: "15%Off",
        img: Sakkiz,
        quality: "Available(in stock)",
        title: "Strawberry",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 14,
        skidka: "15%Off",
        img: Toqqiz,
        quality: "Available(in stock)",
        title: "Eggplant",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
      {
        id: 15,
        skidka: "15%Off",
        img: On,
        quality: "Available(in stock)",
        title: "Egg",
        newPrice: "$12",
        oldPrice: "$15",
        count: 0,
        liked: false,
      },
    ],

    cart: [],
  });

  return (
    <Datas.Provider
      value={{
        reduceData,
        dispatch,
      }}
    >
      {children}
    </Datas.Provider>
  );
}
