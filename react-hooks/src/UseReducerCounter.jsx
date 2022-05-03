import React, {useReducer} from 'react'

const initialState = 0
const reducerFunc = (countState, action) => {
  switch (action){
    case 'increment':
      return countState + 1
    case 'decrement':
      return countState - 1
    case 'reset':
      return initialState
    default:
      return countState
  }
}

const Counter = () => {

  const [count, dispatch] = useReducer(reducerFunc, initialState)

  return(
    <>
      <h2>カウント:{count}</h2>
      <button onClick={()=>dispatch('increment')}>increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('reset')}>reset</button>
    </>
  )
}

export default Counter