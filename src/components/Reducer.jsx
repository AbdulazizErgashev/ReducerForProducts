// import React, { useReducer } from "react";

// export default function Reducer() {
//   const reducer = (state, action) => {
//     let { type, payload } = action;
//     switch (type) {
//       case "oshir":
//         state = { ...state, son: state.son + 1 };
//         return state;
//       case "kamaytirish":
//         return (state -= payload);
//     }
//   };

//   let [count, dispatch] = useReducer(reducer, { son: 0 });

//   return (
//     <div>
//       <h1>{count.son}</h1>
//       <button onClick={() => dispatch({ type: "oshir", payload: 1 })}>
//         Plus
//       </button>
//       <button onClick={() => dispatch({ type: "kamaytirish", payload: 1 })}>
//         Minus
//       </button>
//     </div>
//   );
// }

import React, { useReducer } from "react";

export default function Reducer() {
  const reducer = (state, action) => {
    console.log(action);

    let { type, payload } = action;
    switch (type) {
      case "oshir":
        // return (state += 1);
        return (state += payload);
      case "kamaytir":
        // return (state -= 1);
        return (state -= payload);
      case "reset":
        return (state = payload);
    }
  };

  let [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col items-center gap-y-5 py-10 bg-[#d3d3d3]">
      <h1 className="text-[#fff] text-3xl font-bold font-mono">{count}</h1>
      <div className="flex items-center gap-x-20">
        <button
          onClick={() => dispatch({ type: "oshir", payload: 1 })}
          className="text-[#fff] font-mono font-bold text-xl bg-blue-400 p-3"
        >
          Plus
        </button>
        <button
          onClick={() => dispatch({ type: "kamaytir", payload: 1 })}
          className="text-[#fff] font-mono font-bold text-xl bg-red-400 p-3"
        >
          Minus
        </button>
        <button
          onClick={() => dispatch({ type: "reset", payload: 0 })}
          className="text-[#fff] font-mono font-bold text-xl bg-red-700 p-3"
        >
          reset
        </button>
      </div>
    </div>
  );
}

// It should stop in 0, should not reduce -1,-2 for example, when clicked minus button
