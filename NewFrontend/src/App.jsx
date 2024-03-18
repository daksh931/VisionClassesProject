import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/Components/HomePage'
import Navbar from './assets/Components/Navbar'
import Login from './assets/Components/Login'

function App() {

  return (

    <div>
      <Navbar />
      
      <Routes >
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/login' element={ <Login /> }/>
      </Routes>
    </div>
  )
}

export default App
