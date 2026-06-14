import React, { useEffect } from 'react'
import Login from './Pages/Login'
import TodoList from './Pages/TodoList'
import Register from './Pages/Register'
import { BrowserRouter,Routes,Route} from 'react-router-dom' 
import { AnimatePresence } from 'framer-motion'



function App() {
  const isAuth = () => {
    return localStorage.getItem("access");
  };
  return(
  <AnimatePresence mode='wait'>
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/todolist' element={<TodoList isAuth={isAuth()}/>}/>
      <Route path='/register' element={<Register />}/>
      <Route path='*' element={<h1>404 Page not found</h1>}/>
    </Routes>
    </BrowserRouter>
  </div>
  </AnimatePresence>)
}

export default App
