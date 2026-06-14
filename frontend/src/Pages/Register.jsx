import React, { useState } from 'react'
import api from '../Api/axiosInstance'
import '../App.css'
import { useNavigate } from 'react-router-dom';
import TextInput from '../Components/TextInput';
import ButtonB from '../Components/ButtonB';
import {toast,Toaster} from 'react-hot-toast'
import PageTransition from '../Components/PageTransition';
import { FaArrowLeft } from 'react-icons/fa';

function Register() {
        const [loading,setLoading]=useState(false);
        const navigate=useNavigate();
        const successnotify=()=>{toast.success('Registration successful! You can now login.',{duration:4000,position:"top-right"});}
        const errornotify =()=>{toast.error('Registration failed',{duration:4000,position:"top-right"});}

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

        const handleRegister=async()=>{
            try{
                await api.post("/api/auth/register/",form);
                setForm({
                username:"",
                password1:"",
                password2:""
            })
            successnotify();
            setTimeout(() => {
                navigate("/");
            }, 4000);
            
            }
            catch(error){
                errornotify();
            }
            finally{
                setLoading(false)
            }
        }

  return (
    <PageTransition>
    <div className='card-container'>
        <form className='card'>
            <div style={{display: "flex",justifyContent: "flex-start",width: "100%"}}>
                <FaArrowLeft onClick={() => navigate("/")} style={{ cursor: "pointer" }}/>
            </div>
            <h1 className='logo-bg'>📔</h1>
            <h1 className='todo-title'>REGISTER</h1>   
            <TextInput type='text' name='username' label="Enter username" state={handleChange}/>
            <TextInput type='password' name='password1' label="Enter password" state={handleChange}/>
            <TextInput type='password' name='password2' label="Confirm password" state={handleChange}/><br/>
            <ButtonB action={(e)=>{e.preventDefault();handleRegister();}} disabled={loading}>{loading ?"Registering...":"Register"}</ButtonB>
            <Toaster/>
        </form>
    </div>
    </PageTransition>
  )
}

export default Register
