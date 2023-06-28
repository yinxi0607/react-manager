import {useRef, useState} from 'react'
import './App.css'

function App() {
  const userRef = useRef<HTMLInputElement>(null)
  const [val,setVal] = useState('')
  const handleClick = () => {
    setVal(userRef.current?.value || '')
    console.log(userRef.current?.className)
    console.log(userRef.current?.id)
  }
  return (
    <>
      <div>
        <input type='text' ref={userRef} className="className" id="iId"/>
        <button onClick={handleClick}>Click</button>
        <p>{val}</p>
      </div>

    </>
  )
}

export default App
