import {useState} from "react";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <section className='sectionCount'>
      <p className='sectionCount__text'>contagem: {count}</p>
      <div className='sectionCountBox'>
        <button className='sectionCountBox__button' onClick={increment}>+</button>
        <button className='sectionCountBox__button' onClick={decrease}>-</button>
      </div>
    </section>
  )
}

export default App
