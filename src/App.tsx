import './App.css'
import {useState, useTransition} from "react";

function App() {
  const [query, setQuery] = useState('')
  const [list, setList] = useState<any>([])
  const [isPending, startTransition] = useTransition()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    startTransition(() => {
        const arr: any[] = Array.from({length: 10}).fill(1);
        setList([...list, ...arr])
      }
    )
  }
  return (
    <>
      <div>
        <input type='text' onChange={handleChange} value={query}/>
      </div>
      <div>
        {
          isPending?<div>loading...</div>:list.map((index: number) => {
              return <p key={index}>{query}</p>
            })
        }

      </div>
    </>

  )
}

export default App
