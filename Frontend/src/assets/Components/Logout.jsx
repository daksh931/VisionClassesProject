import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setToken,setUserData } from '../../store/Slices/authSlice';

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async (e) =>{
        const response = await axios.get("http://localhost:4000/api/v1/user/logout",
        {
            headers: {
              "Content-Type" : "application/json",
              
            },
            withCredentials: true, // help to set cookies in browser from backend server
          }
        ).then((res)=>{console.log("sucess logout",res.data)
            dispatch(setToken(null))
            localStorage.setItem("token",null)

            dispatch(setUserData(null))
            localStorage.setItem("user",null)
            })
        
        // console.log(response)
        return navigate('/')
    }
    handleLogout();
}

export default Logout
