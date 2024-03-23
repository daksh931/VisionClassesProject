import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/Components/HomePage'
import Navbar from './assets/Components/Navbar'
import Login from './assets/Components/Login'
import Courses from './assets/Components/Courses'
import Signup from './assets/Components/Signup'

function App() {

  return (

    <div>
      <Navbar />
      
      <Routes >
        <Route path='/login' element={ <Login /> }/>
        <Route path='/signup' element={ <Signup /> }/>
        <Route path='/' element={ <Courses /> }/>
      </Routes>
    </div>
  )
}

export default App
