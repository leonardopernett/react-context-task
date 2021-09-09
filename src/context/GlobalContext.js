import React, {useReducer} from 'react'
import { reducer } from './appreducer'
import {nanoid} from 'nanoid';
import {toast} from 'react-toastify'
const initialState = {
    tasks:[
        {
          id:1,
          title:'task one',
          description:'description one',
          done:false
        },
        {
          id:2,
          title:'task two',
          description:'description two',
          done:false
        },

        {
          id:3,
          title:'task three',
          description:'description three',
          done:false
        },
    ]
}

export const Context = React.createContext({})


export const ContextProvider = ({children}) =>{

  const [state, dispatch] = useReducer(reducer, initialState)


  const addTask = (data) =>{
    const res = {...data , id: nanoid() , done:false}
    dispatch({
        type:"ADD_TASK",
        payload:res
      })
  }

  const deleteTask = (id)=>{
    dispatch({
      type:'DELETE_TASK',
      payload:id
    })
    toast.success('task deleted')

  }

  const updateTask = (task)=>{
    dispatch({type:'EDIT_TASK', payload:task})
  }

    return <Context.Provider value={{...state, addTask,deleteTask,updateTask}}>
      {children}
    </Context.Provider>
}