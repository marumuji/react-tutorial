import React, {useState} from 'react'

const Title = () => {
  console.log('Title component')
  return (
    <h2>useCallBackTest Vol.1</h2>
  )
}

const Button = ({handleClick, value}) => {
  console.log('Button child component', value)
  return <button type="button" onClick={handleClick}>{value}</button>
}

const Count = ({text, countState}) => {
  console.log('Count child component')
  return <p>{text}:{countState}</p>
}

const Counter = () => {
  const [firstCountState, setFirstCountState] = useState(0)
  const [secondCountState, setSecondCountState] = useState(10)

  const incrementFirstCounter = () => setFirstCountState(firstCountState + 1)
  const incrementSecondCounter = () => setSecondCountState(secondCountState + 10)

  return (
    <>
      <Title/>
      <Count text="+ 1 ボタン" countState={firstCountState}/>
      <Count text="+ 10 ボタン" countState={secondCountState}/>
      <Button  handleClick={incrementFirstCounter} value={'+1 ボタン'}/>
      <Button  handleClick={incrementSecondCounter} value={'+10 ボタン'}/>
    </>
  )
}

export default Counter