import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todos:[],
    selectedTodo:{}
}


const todoSlice=createSlice({
    name:'todoSlice',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        editTodo:(state,action)=>{
            const {selectedText,i}=action.payload
            state.selectedTodo=action.payload
            state.todos[i].editStatus=true
            state.todos[i].text=''
        },
        updateTodo:(state,action)=>{
            state.todos[state.selectedTodo.i].text=action.payload.text
            state.todos[state.selectedTodo.i].editStatus=false
        },
        markTodo:(state,action)=>{
           const index = action.payload;
           state.todos[index].markTodo =  !state.todos[index].markTodo;
           state.todos[index].editStatus =  !state.todos[index].editStatus

        },
        deleteTodo:(state,action)=>{
            const filteredTodo=state.todos.filter((todo,i)=>i!==action.payload)
            state.todos=filteredTodo
        }
    }
})

export const {addTodo,editTodo,deleteTodo,updateTodo,markTodo}=todoSlice.actions
export default todoSlice.reducer
