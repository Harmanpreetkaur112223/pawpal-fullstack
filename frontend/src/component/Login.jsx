import React, { useState } from "react";
import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";

function Login() {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')


  const navigate = useNavigate()
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
 
  }

  return (
    <>
      <div className='h-[88vh] w-[99%]  m-2  mt-3  shadow-sm shadow-black p-4 flex items-center justify-center'>
        <div className="h-[75%] bg-zinc-100 p-8 w-[45%] rounded-lg shadow-lg  shadow-black  flex flex-col items-center justify center ">
          <h2 className="text-[2.2vw] font-bold text-teal-900 cursor-pointer mt-2">
            Login 
          </h2>
          <form className="flex align-center flex-col justify-center" onSubmit={handleSubmit}>
            <div className="m-4 ">
              <label
                htmlFor="email"
                className="mt-8 flex justify-between flex-row inline font-semibold "
              >
                Email :{" "}
              </label>
              <input
                onChange={handleEmail}
                className="p-3 rounded-lg hover:shadow-lg  hover:shadow-black outline-none text-[0.9vw] hover:text-black h-fit w-[25vw]  bg-[rgba(0,0,0,0.1)]  "
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
              />
            </div>
            <div className="m-4 ">
              <label
                htmlFor="password"
                className="mt-8 flex justify-between flex-row inline font-semibold inline "
              >
                Password :{" "}
              </label>
              <input
                onChange={handlePassword}
                className="p-3 rounded-lg hover:shadow-lg  hover:shadow-black outline-none text-[0.9vw] hover:text-black h-fit w-[23vw]  bg-[rgba(0,0,0,0.1)]  "
                type="password"
                name="password"
                id="password"
                placeholder="example123"
              />
            </div>
            <div className="p-4 flex items-center justify-center"><button className="rounded-lg bg-teal-900 text-white h-fit p-4 w-fit hover:shadow-lg hover:bg-slate-100 hover:shadow-black hover:text-teal-900 text-[1.1vw] font-semibold ">Login Account</button></div>
          </form>
          <h2 className="text-[1vw]">
            {" "}
            New user !!{" "}
            <Link to="/register" className="text-teal-600 text-[.9vw] font-semibold">
              {" "}
              create account
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}


export default Login