import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../reducers/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
    </div>
  );
};

export default Counter;
