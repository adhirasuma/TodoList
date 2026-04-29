
import React, { useState } from 'react'
import api from './axiosInstance'
import '../App.css'

function Register() {
        const [loading,setLoading]=useState(false);
        const [error,setError]=useState(null);
        const [message,setMessage]=useState("");
        const [form,setForm]=useState(
            {
                username:"",
                password1:"",
                password2:""
            }
        )

        const handleChange=(e)=>{
            setForm({
                ...form,
                [e.target.name]:e.target.value.trim()
            })
        }

        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                await api.post("/api/auth/register/",form);
                setForm({
                username:"",
                password1:"",
                password2:""
            })
            setMessage("Registration successful! You can now login.");
            }
            catch(error){
                setError("registration failed")
            }
            finally{
                setLoading(false)
            }
        }
  return (
    <div className='Display'>
        <form onSubmit={handleSubmit} className='LoginCard'>
            <h1>REGISTER</h1>   
            <br></br>
            <label>Username</label>
            <input type='text' name='username' placeholder="Enter username" onChange={handleChange}></input>
            <label>Password1</label>
            <input type='password' name='password1' placeholder="Enter password" onChange={handleChange}></input>
            <label>Password2</label>
            <input type='password' name='password2' placeholder="Confirm password" onChange={handleChange}></input>
            <br></br>
            <button disabled={loading} className='Deletebutton'>{loading ?"Registering...":"Register"}</button>
            {message && <p className='message'>{message}</p>}
            {error && <p className='error'>{error}</p>}
        </form>
      
    </div>
  )
}

export default Register
