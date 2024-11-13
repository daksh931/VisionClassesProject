import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setToken, setUserData } from "../../store/Slices/authSlice";
import { useSelector } from "react-redux";


export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("admin");

  const { token, userData } = useSelector((state) => state.auth)

  const handleRadioButton = (e) => {
    setRole(e);
  }
  // console.log(role)

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, phone, password, role);

    if(!name || !email || !phone || !password || !role){
      alert("Fields should not be empty")
    }
    if(password && password.length <8){
      alert("Password should contain atleast 8 letters")
    }

    const signupData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role
    }
    // console.log(signupData)
    const response = await axios.post(import.meta.env.VITE_BACKEND_URL+'/api/v1/user/register',
      JSON.stringify(signupData),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // help to set cookies in browser from backend server
      }).then((res) => {
        dispatch(setToken(res.data.token))
        localStorage.setItem("token", JSON.stringify(res.data.token))
        
        // console.log(res.data)
        
        dispatch(setUserData(res.data.user))
       localStorage.setItem("user",JSON.stringify(res.data.user))
      })


    // console.log("Sucessfully signedUp")
    return navigate('/');
  }

  return (
    <>
      <form method="post" onSubmit={handleSubmit}  >

        <div id="Signup-container" className="flex flex-col w-full min-h-[120vh] bg-slate-100">
          <div className="self-center mt-12 shadow-xl  shadow-zinc-200 hover:shadow-zinc-300  rounded-md border-[1px] border-gray-400  min-h-96 min-w-80  bg-slate-50 p-4 font-semibold">
            <h2 className="text-slate-700 text-center font-bold text-2xl ">
              Signup Here
            </h2>

            <Input placeholder={"Name"} onChange={(e) => setName(e.target.value)} />
            <Input placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            <Input type={'number'} placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} />
            <Input type={'password'} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />

            {/* Radio Btns */}
            <div className="px-2 py-1 flex justify-evenly">
              <div>
                <input type="radio" id="admin" value="admin" checked={role === "admin"} onChange={() => handleRadioButton("admin")} />
                <label htmlFor="admin"> Admin</label>
              </div>

              <div>
                <input type="radio" id="user" value="user" checked={role === "user"} onChange={() => handleRadioButton("user")} />
                <label htmlFor="user"> User</label>
              </div>
            </div>

            <div className="flex justify-center w-full">
                <button type="submit" className="w-full flex  ">

                <Button to={''} style={"px-5 mt-5 w-full"} > Signup </Button>
                </button>
              {/* //custom Button component not working */}

              {/* <button type="submit" className="align-middle min-h-8 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 rounded-lg bg-gradient-to-tr from-zinc-700 via-zinc-900 to-zinc-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-2 border-gray-400 hover:border-white text-nowrap	 mx-2">
                Signup </button> */}
            </div>
          </div>
        </div>
      </form>

    </>
  );
}