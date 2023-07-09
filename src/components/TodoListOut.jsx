import React from 'react'
import { FaTrashAlt, FaRegEdit, FaRegCheckCircle } from 'react-icons/fa';


const TodoListOut = ({todos,editTask,markTask,deleteTask}) => {
  return (
    <>
      {
            todos&&todos.map((todoVal,i)=>(
              <ul key={i}>
                <li className={todoVal.markTodo?'marked':'unmarked'}>{todoVal.text}</li>
                <li>{!todoVal.editStatus?<FaRegEdit onClick={()=>{editTask(todoVal.text,i)}} className='edit'/>:null}
                {<FaRegCheckCircle onClick={()=>{markTask(i)}} className='mark'/>}
                {<FaTrashAlt onClick={()=>{deleteTask(i)}} className='delete'/>}</li>
              </ul>
            ))
           } 
    </>
  )
}

export default TodoListOut
