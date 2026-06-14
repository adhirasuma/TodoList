import React, { useEffect, useState } from 'react'
import api from '../Api/axiosInstance';
import '../App.css'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../Components/DeleteButton';
import EditButton from '../Components/EditButton';
import SaveButton from '../Components/SaveButton';
import TextInput from '../Components/TextInput';
import CreateButton from '../Components/CreateButton';
import LineDiv from '../Components/LineDiv';
import LogoutButton from '../Components/LogoutButton';
import { Toaster ,toast } from 'react-hot-toast';
import {FaTimes} from 'react-icons/fa'
import PageTransition from '../Components/PageTransition';
import ThemeButton from '../Components/ThemeButton'
import { useTheme } from '../Components/ThemeProvider';


function TodoList() {
  let [Todolist,setTodolist]=useState([]);
  let [Task,setTask]=useState("");
  let [image,setimage]=useState('');
  let [editId, setEditId] = useState(null);
  let [loading,setLoading]=useState(true);
  const { darkMode } = useTheme();
  const navigate=useNavigate();
  
  const successnotify=()=>{toast.success('Congrats ! task completed ',{duration:4000,position:"top-right"});}
  const errornotify =(error)=>{toast.error(error,{duration:4000,position:"top-right"});}

  const Layout=()=> {
    return (
      <div>
        <div className='card-header'>
          <ThemeButton/>
          <LogoutButton action={()=>{navigate("/");localStorage.clear();}}/>
        </div>
        <div className="title-container">
          <span className="side-logo-bg">📔</span>
          <h1 className="todo-title">Task Journal</h1>
        </div>
        <LineDiv align={"right"} content={"work to do"}/>
      </div>
    )
  }
  
  const handleEdit =(id,task)=>{
      setEditId(id);
      setTask(task);
  }
  
  const handleSave =(id,task)=>{
    UpdateData(id, task);
    setTask("");
  }

  const fetchData=async()=>{
    try{
      setLoading(true);
      const response=await api.get("/api/todo/");
      setTodolist(response.data);
      console.log(response.data);
    } catch (error){
        console.log(error.response?.data);
      }
    finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);

  const AddData=async(Task)=>{
    if (!Task.trim()) {
    errornotify("Task cannot be empty");
    return;
    }
    if (Task.length>99){
      errornotify("Task has exceeded its length");
      return;
    }
    try{
      await api.post("/api/todo/",{task:Task,status:false});  
      fetchData();
    } catch (error) {
      console.log(error.response?.data|| "Failed to load data");
    }
  }

  const DeleteData=async(Id)=> {
    try{
    await api.delete(`/api/todo/${Id}/`)
    fetchData();
    }
    catch(error){
       console.log(error.response?.data || "Delete failed");
    }
  }

  const UpdateData=async(Id,Task)=>{
    try{
    await api.put(`/api/todo/${Id}/`,{task:Task,status:true})
    fetchData();
    setEditId(null);}
    catch(error){
      console.log(error.response?.data || "Update failed");
    }
  }

  const ToggleStatus = async (id,Task, currentStatus) => {
  try {
    await api.put(`/api/todo/${id}/`, {
      task:Task,
      status: !currentStatus
    });
    fetchData();
  } catch (error) {
    console.log(error.response?.data || "Status update failed");
  }
};

  if (loading) {
  const toastId = toast.loading("Loading",{duration:1000,position:"top-right"});
  setTimeout(() => {
    toast.success('Loading Completed!', {
  id: toastId,});
  }, 1000);
}


  let tasks = Todolist.map((todo) => (
  <div key={todo.id}>
   <ul>
    {todo.id === editId ? (
      <li >
        <div style={{display:"flex",flexDirection:"row",gap:7,}}>
        <div>
          <TextInput value={Task} state={(e) => setTask(e.target.value)} />
        </div>
        <div>
        <SaveButton action={() => {handleSave(todo.id, Task);}} deactivate={!Task.trim()}/>
        </div>
        </div>
      </li>
    ) : (
      <li> 
        <Checkbox
        checked={todo.status}
        onChange={() => ToggleStatus(todo.id,todo.task,todo.status)}
        icon={<RadioButtonUncheckedIcon />}
        checkedIcon={<CheckCircleIcon />}
        sx={{
          color:darkMode
              ?"#ffd79cd0"
              :"#848484",
          "&.Mui-checked": {
            color: "#D8A25E",},}}/>
            <span
            style={{
              color: todo.status
              ? darkMode
              ?"#ffd79cd0"
              :"#848484"
              : darkMode
              ? "#FFD89C"
              : "#000",
              transition: "0.3s",
              overflowWrap: "break-word",
              wordBreak: "break-word"}}>
            {todo.task}
            <EditButton action={() => handleEdit(todo.id, todo.task)} />
            <DeleteButton action={() => DeleteData(todo.id)} />
            </span>
      </li>
    )
    }
    <LineDiv content={todo.date} align={"right"}/>
    </ul>
  </div>
));

if (!localStorage.getItem('access')){
  navigate('/');
}

  return (
  <PageTransition>
  <div>
    <Toaster/>
    <div className='todo-container'>
      <br/>
      <form className='todo-list'>
        <Layout/>
        <div style={{display:"flex",flexDirection:"row",gap:7}}>
          <div>
            <TextInput label='Task' state={(e)=>{setTask(e.target.value);}} deactivate={!localStorage.getItem("access")}/>
          </div>
          <div>
            <CreateButton action={(e)=>{e.preventDefault();AddData(Task);}} deactivate={!localStorage.getItem("access")}/>
          </div>
        </div>
        { Todolist.length === 0 && !loading && <p style={{margin:'10px'}}>No tasks yet...</p>}
        <LineDiv/>
        {tasks}
      </form>
      
      
      
    <footer  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:"30px",
  }}>
        <LineDiv align={"center"} content={"© 2026 TodoList App • R.Adhira"}/>
      </footer>
    </div>
  </div>
  </PageTransition>
  );
}

export default TodoList
