import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TempConverter from './components/converter/converter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TempConverter />
    </div>
  )
}

export default App
