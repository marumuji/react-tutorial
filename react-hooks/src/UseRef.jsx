import React, {useState, useRef} from 'react'

/* input area focus
const UseRef = () => {
  const inputEl = useRef(null)
  const handleClick = () => {
    inputEl.current.focus()
    console.log('inputEl.current:', inputEl.current)
  }
  return (
    <>
      <input ref={inputEl} type="text"/>
      <button onClick={handleClick}>入力エリアをフォーカスする</button>
    </>
  )
}
*/

const UseRef = () => {
  const inputEl = useRef(null)
  const [text, setText] = useState("")
  const handleClick = () => {
    setText(inputEl.current.value)
  }
  console.log('レンダリング!!')
  return(
    <>
      <input ref={inputEl} type="text"/>
      <button onClick={handleClick}>set text</button>
      <p>テキスト : {text}</p>
    </>
  )
}

export default UseRef