import React, {useReducer} from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 100,
}
const reducerFunc = (countState, action) => {
  switch (action.type){
    case 'increment1':
      return {...countState, firstCounter: countState.firstCounter + action.value}
    case 'decrement1':
      return {...countState, firstCounter: countState.firstCounter - action.value}
    case 'increment2':
      return {...countState, secondCounter: countState.secondCounter + action.value}
    case 'decrement2':
      return {...countState, secondCounter: countState.secondCounter - action.value}
    case 'reset1':
      return {...countState, firstCounter: initialState.firstCounter}
    case 'reset2':
      return {...countState, secondCounter: initialState.secondCounter}
    default:
      return countState
  }
}

const Counter = () => {

  const [count, dispatch] = useReducer(reducerFunc, initialState)

  return(
    <>
      <h2>カウント:{count.firstCounter}</h2>
      <button onClick={()=>dispatch({type: 'increment1', value: 1})}>increment1</button>
      <button onClick={()=>dispatch({type: 'decrement1', value: 1})}>decrement1</button>
      <button onClick={()=>dispatch({type: 'reset1'})}>reset</button>
      <h2>カウント2:{count.secondCounter}</h2>
      <button onClick={()=>dispatch({type: 'increment2', value: 100})}>increment2</button>
      <button onClick={()=>dispatch({type: 'decrement2', value: 100})}>decrement2</button>
      <button onClick={()=>dispatch({type: 'reset2'})}>reset</button>
    </>
  )
}

export default Counter