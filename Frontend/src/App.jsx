import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/Components/HomePage'
import Navbar from './assets/Components/Navbar'
import Login from './assets/Components/Login'
import Courses from './assets/Components/Courses'
import Signup from './assets/Components/Signup'
import Logout from './assets/Components/Logout'
import AddCourse from './assets/Components/AddCourse'

function App() {

  return (

    <div>
      <Navbar />
      
      <Routes >
        <Route path='/signup' element={ <Signup /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/logout' element={ <Logout /> }/>
        <Route path='/' element={ <Courses /> }/>
        <Route path='/addCourse' element={ <AddCourse /> }/>
      </Routes>
    </div>
  )
}

export default App
