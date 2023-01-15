import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section className="flex flex-col space-y-10 my-[10%] items-center">
      <p>{count}</p>
      <div className="flex space-x-5">
        <button
          className="p-4 bg-blue-300 rounded"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="p-4 bg-blue-300 rounded"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
        className="p-4 rounded text-center"
      />
      <div className="flex space-x-5">
        <button
          className="p-4 bg-blue-300 rounded"
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add amount
        </button>
        <button
          className="p-4 bg-blue-300 rounded"
          onClick={() => dispatch(resetAll)}
        >
          reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
