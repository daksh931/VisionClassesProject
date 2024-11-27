import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setToken,setUserData } from '../../store/Slices/authSlice';
import Loading from './ui/Loading';
import { useState } from 'react';

export default function Logout() {
  
  const[loading,setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async (e) =>{
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL+"/api/v1/user/logout",
        {
            headers: {
              "Content-Type" : "application/json" 
            },
            withCredentials: true, // help to set cookies in browser from backend server
          }
        ).then((res)=>{console.log("sucess logout",res.data)
            dispatch(setToken(null))
            localStorage.removeItem("token")

            dispatch(setUserData(null))
            localStorage.removeItem("user")
            }).finally( ()=> {
              setLoading(false);
            })
        
        // console.log(response)
        return navigate('/')
    }
    handleLogout();


    if(loading){
      return(
      <Loading />)
    }
  return (
    <></>)
}
