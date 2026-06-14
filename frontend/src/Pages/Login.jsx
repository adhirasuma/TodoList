import { useNavigate } from 'react-router-dom';
import api from '../Api/axiosInstance'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import TextInput from '../Components/TextInput';
import ButtonB from '../Components/ButtonB';
import PageTransition from '../Components/PageTransition';
import ThemeButton from '../Components/ThemeButton';


function Login({refreshAuth}) {
    const navigate=useNavigate();
    const [form,setForm]=useState({username:"",password:""});
    const [loading,setLoading]=useState(false);
    const successnotify = () =>toast.success('Login successful!',{position:"top-right"});
    const errornotify =()=>{toast.error(' Login failed',{duration:4000,position:"top-right"});}
    localStorage.setItem("username", form.username);

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleLogin=async()=>{
    try{
    setLoading(true);
    const response=await api.post('/api/auth/login/',form);
    localStorage.setItem("access",response.data.access);
    localStorage.setItem("refresh",response.data.refresh);

    if (refreshAuth) refreshAuth();
    successnotify();
    setTimeout(() => {
        navigate("/todolist");
    }, 3000);
    }
    catch(error){
        errornotify();
    }
    finally{
        setLoading(false);
    }
    }
    

  return (
    <PageTransition>
    <div className='card-container'>
        <form className='card'>  
            <div style={{display: "flex",justifyContent: "flex-end",width: "100%"}}>
                <ThemeButton/>
            </div>
            <h1 className='logo-bg'>📔</h1>
            <h1 className='todo-title'>LOGIN</h1>
            <TextInput type='text' name='username' value={form.username.trim()} label="Enter username" state={handleChange}/>
            <TextInput type='password' name='password' value={form.password.trim()} label="Enter password" state={handleChange}/>
            <br/>
            <div style={{display:"flex",flexDirection:"row",gap:10}}>
                <div>
                <ButtonB action={(e)=>{e.preventDefault();handleLogin();}} deactivate={loading}>{loading? "logging...":"Login"}</ButtonB>
                <Toaster />
                </div>
                <div>
                    <ButtonB action={()=>{navigate("register");}}>Register</ButtonB>
                </div> 
            </div>
        </form>
    </div>
    </PageTransition>
  )
}

export default Login
