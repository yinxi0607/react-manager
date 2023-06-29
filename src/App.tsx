import './App.css'
import {useState} from "react";
import reactLogo from './assets/react.svg'
import {NavLink, useNavigate} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/react')
  }
  return (

    <div className='App'>
      <div>
        <NavLink to='/vite'>
          <img src='/vite.svg' className='logo' alt='Vite logo'/>
        </NavLink>
        <NavLink to='/react'>
          <img src={reactLogo} className='logo react' alt='React logo'/>
        </NavLink>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>Count is {count}</button>
        <button onClick={handleClick}>点击跳转</button>
      </div>
    </div>
  )
}

export default App
