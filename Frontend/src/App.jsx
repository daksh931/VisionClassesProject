import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/Components/HomePage'
import Navbar from './assets/Components/Navbar'
import Login from './assets/Components/Login'
import Courses from './assets/Components/Courses'
import Signup from './assets/Components/Signup'
import Logout from './assets/Components/Logout'
import AddCourse from './assets/Components/AddCourse'
import ResetPassword from './assets/Components/ResetPassword'
import Profile from './assets/Components/Profile'
import UpdateProfile from './assets/Components/UpdateProfile'

function App() {

  return (

    <div>
      <Navbar />
      
      <Routes >
        <Route path='/profile' element={ <Profile /> }/>
        <Route path='/updateProfile' element={ <UpdateProfile /> }/>

        <Route path='/signup' element={ <Signup /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/logout' element={ <Logout /> }/>
        <Route path='/' element={ <Courses /> }/>
        <Route path='/addCourse' element={ <AddCourse /> }/>
        <Route path='/password/reset/:userid/:token' element={ <ResetPassword /> }/>
      </Routes>
    </div>
  )
}

export default App
