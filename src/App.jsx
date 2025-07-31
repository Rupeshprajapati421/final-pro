import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AllProduct from './components/AllProduct'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/allproduct' element={<AllProduct/>} />
     </Routes>
          
    </>
    
  )
}

export default App
