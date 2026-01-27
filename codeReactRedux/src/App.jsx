import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from "./feature/counter/counterSlice";
import {useState} from 'react'

function App() {

  const [num, setNum] = useState()
  const [amount, setAmount] = useState();
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick(){
      dispatch(increment());
  }

  function handleDecrementClick(){
      dispatch(decrement());
  }
  
  function handleIncrementByAmount(){
    dispatch(incrementByAmount(amount));
  }

  function handleResetClick(){
    dispatch(reset());
  }

  function handleDecrementByAmount(){
    dispatch(decrementByAmount(num));
  }

  return (
    <>
    <div className="flex flex-col w-full h-full mx-50 justify-center items-center my-50 bg-slate-600 text-5xl gap-2 text-white">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count: {count} </p>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>

      <input 
      value={amount}
      placeholder="Enter your amount"
      type="Number"
      onChange={(e)=> setAmount(e.target.value)} 
      />
      <button onClick={handleIncrementByAmount}>Increment by {amount}</button>
      <input 
      value={num}
      placeholder="Enter your amount"
      type="Number"
      onChange={(e)=> setNum(e.target.value)} 
      />
      <button onClick={handleDecrementByAmount}>Decrement by {num}</button>
    </div>
   </>
  )
}

export default App