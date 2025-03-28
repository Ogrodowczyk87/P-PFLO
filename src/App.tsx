import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-pink-300 h-96 w-96'>
      <h1 className='bg-green-600 '>Hello World</h1>
    </div>
  )
}

export default App
