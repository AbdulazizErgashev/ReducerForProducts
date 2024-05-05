import React, { useReducer } from "react";

export default function Reducer2() {
  const reducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
      case "changeM":
        return { ...state, isModal: false };
      case "plus":
        let element = state.data.find((item) => item.id === payload);

        if (element.count < 5) {
          return {
            ...state,
            data: state.data.map((item) =>
              item.id === payload ? { ...item, count: item.count + 1 } : item
            ),
          };
        } else {
          window.alert("buncha maxsulot yoq");
        }

      case "minus":
        let min_elem = state.data.find((item) => item.id === payload);

        if (min_elem.count > 0) {
          return {
            ...state,
            data: state.data.map((item) =>
              item.id === payload ? { ...item, count: item.count - 1 } : item
            ),
          };
        } else {
          window.alert("noldan kamaymaydi");
        }
        return state;
    }
  };

  let [reduceData, dispatch] = useReducer(reducer, {
    data: [
      {
        id: 1,
        count: 0,
      },
      {
        id: 2,
        count: 0,
      },
      {
        id: 3,
        count: 0,
      },
      {
        id: 4,
        count: 0,
      },
    ],
    isModal: true,
    filterData: [],
  });

  return (
    <div>
      {/* <h1>{reduceData.isModal ? "rost" : "yolg'on"}</h1>
      <button onClick={() => dispatch({ type: "changeM" })}>changeModal</button> */}
      <h1>product map</h1>
      {reduceData.data.map((l) => {
        return (
          <div key={l.id}>
            <button onClick={() => dispatch({ type: "plus", payload: l.id })}>
              plus
            </button>
            {l.count}
            <button onClick={() => dispatch({ type: "minus", payload: l.id })}>
              minus
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
