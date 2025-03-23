import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/actionCreators';

const Counter = () => {
  const count = useSelector((state: any) => {
    console.log('State in useSelector:', state); 
    return state.count;
  });
  const dispatch = useDispatch();

  console.log('Counter component is rendering'); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
