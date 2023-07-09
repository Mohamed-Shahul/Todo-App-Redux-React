import React, { useState } from 'react'
import { addTodo, updateTodo } from './TodoSlice';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';

const AddTodo = () => {

    const [todoState,setTodoState]=useState({text:'',editStatus:false,markTodo:false})

    const dispatch=useDispatch()
    const {todos,selectedTodo}=useSelector((state)=>state.todos)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todoState.text!==''){
            dispatch(addTodo(todoState))
        }
        setTodoState({...todoState,text:''})
    }

    let handleUpdate=()=>{
      if(todoState.text!==''){
          dispatch(updateTodo(todoState))
      }
      setTodoState({...todoState,text:'',editStatus:false})
    }

  return (
    <>
     <div className='addTodo'>
      <input type="text" value={todoState.text} onChange={(e)=>setTodoState({...todoState,text:e.target.value})}/>
      {todoState.editStatus?<button onClick={handleUpdate}>Update</button>:
      <button onClick={handleSubmit}>Add</button>
      }
    </div>
    <TodoList todoState={todoState} setTodoState={setTodoState}/>
    </>
   

  )
}

export default AddTodo
