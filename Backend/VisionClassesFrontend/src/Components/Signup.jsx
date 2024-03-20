import Input from "./ui/Input";
import Button from "./ui/Button";
import Navbar from "./Navbar";
import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { response } from "express";
import { json } from "react-router-dom";

export default function Signup() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const repsonse = await fetch('http://localhost:4000/api/v1/admin/register', {
      method: "POST",
      header: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        name: name, email: email, phone: phoneNumber, password: password
      })
    })

    if(repsonse.status=== 422 || response.status ===401){
      return response
    }

    if(!repsonse.ok){
      throw json({message:" could not authenticate user"},{status:500})
    }
    return redirect('/');
  }


  return (
    <>
      <Navbar />
      <Form method="post" onSubmit={ handleSubmit}>

        <div className="Signup-container flex flex-col w-full min-h-[120vh] bg-slate-300">
          <div className="self-center mt-12 shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  rounded-md border-4 border-white  min-h-72 min-w-72  bg-slate-400 p-4 font-semibold">
            <h2 className="text-slate-700 text-center font-bold text-2xl ">
              Signup Here
            </h2>

            <Input placeholder={"Name"} onChange={(e) => setName(e.target.value)} classname="mt-5" />
            <Input placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} classname="mt-5" />
            <Input placeholder={"Phone Number"} onChange={(e) => setPhoneNumber(e.target.value)} classname="mt-5" />
            <Input placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} classname="mt-5" />

            <div className="flex justify-center w-full">
              <Button to={'/'} style={"px-5 mt-5"} > Signup </Button>
            </div>
          </div>
        </div>
      </Form>

    </>
  );
}
