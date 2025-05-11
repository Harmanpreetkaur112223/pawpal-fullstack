import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

function Register() {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const[fullname , setFullname] = useState('')
  const{setUser} = useContext(UserDataContext)

  const navigate = useNavigate()
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = async(e)=>{  
    e.preventDefault();
    const newUser = {
      name:fullname,
      email,password
    }
    const response = await axios.post('http://localhost:8000/api/v1/user/register',newUser)
   try{
     if(response.status===201){
     const data = response.data;
      setUser(data.user)
      localStorage.setItem('token',data.token)
      setFullname('')
      setEmail('')
      setPassword('')
      navigate('/home')
    }
   }
 
    catch(err)
    {
      console.log(err.response.data.message)
    }
  }
  const handleFullname = (e)=>{
    setFullname(e.target.value)
    
   }

  return (
    <>
      <div className='h-[95vh] w-[99%]  m-2  mt-3  shadow-sm shadow-black p-4 flex items-center justify-center'>
        <div className="h-[90%] bg-zinc-100 p-8 w-[45%] rounded-lg shadow-lg  shadow-black  flex flex-col items-center justify center ">
          <h2 className="text-[2.2vw] font-bold text-teal-900 cursor-pointer mt-2">
            Register 
          </h2>
          <form className="flex align-center items-center flex-col justify-center" onSubmit={handleSubmit}>
          <div className='m-4  flex space-between align-center p-2 '>
        <label htmlFor="fullname" className='flex justify-between flex-row inline font-semibold '>Fullname : </label>
        <input className='p-3 rounded-lg hover:shadow-lg  hover:shadow-black outline-none text-[0.9vw] hover:text-black h-fit w-[23vw]  bg-[rgba(0,0,0,0.1)] ml-2 ' type="text" name='name' id='fullname' onChange={handleFullname} placeholder='abc'/>
        </div>
        <div className='m-4  flex space-between align-center p-2'>
        <label htmlFor="email" className='flex justify-between flex-row inline font-semibold '>Email : </label>
        <input className='p-3 rounded-lg hover:shadow-lg  hover:shadow-black outline-none text-[0.9vw] hover:text-black h-fit w-[23vw]  bg-[rgba(0,0,0,0.1)] ml-4 ' type="email" name='email' id='email' onChange={handleEmail} placeholder='example@example.com'/>
        </div>
        <div className='m-4  flex space-between align-center p-2  '>
        <label htmlFor="password" className='flex justify-between flex-row inline font-semibold '>Password :</label>
        <input className='p-3 rounded-lg hover:shadow-lg  hover:shadow-black outline-none text-[0.9vw] hover:text-black h-fit w-[23vw]  bg-[rgba(0,0,0,0.1)] ml-2 ' type="password" name='password' id='password' onChange={handlePassword} placeholder='example123'/>
        </div>

        {/* Register the user button  */}
        <div className='h-fit   w-full flex items-center justify-center mt-[2vw]'>
        <button type='submit' className='h-full  rounded-lg text-[1.2vw] font-bold text-white hover:text-teal-900 hover:bg-white hover:shadow-lg hover:shadow-teal-900 bg-teal-800 p-4 w-[50%]'>Register</button>
        </div>
        </form>
          <h2 className='mt-4 ml-8'>Already registeteal? <Link to='/login' className='text-teal-600 text-[.9vw] font-semibold'>login to your account</Link></h2>
        </div>
      </div>
    </>
  );
}


export default Register