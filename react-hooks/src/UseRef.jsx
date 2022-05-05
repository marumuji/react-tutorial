import React, {useRef} from 'react'

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

export default UseRef