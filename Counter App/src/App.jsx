import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{margin: "200px 400px",backgroundColor:'lightblue'}}>
      <div style={{display:"flex",justifyContent:"center",padding:"50px"}}>
        Counter : {count}
      </div>
      <div  style={{display:"flex",justifyContent:"center"}}>
        <div style={{padding:"25px"}}>
            <button onClick={
            ()=>{
              setCount(count+1)
            }
          }>Increment</button>
        </div>
        <div style={{padding:"25px"}}>
            <button onClick={
            ()=>{
              setCount(count - 1)
            }
          }>Decrement</button>
        </div>
        <div style={{padding:"25px"}}>
            <button onClick={
            ()=>{
              setCount(0)
            }
          }>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App
