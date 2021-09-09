import React,{useContext, useEffect,useState} from 'react'
import {Context} from 'context/GlobalContext'
import {useHistory, useParams } from 'react-router-dom'
import {toast} from 'react-toastify';


export default function Form() {

   const history = useHistory()
   const {addTask, tasks, updateTask} = useContext(Context)
   const {id} = useParams()
   
   const [valid, setValid] = useState(false)

   const [state, setstate] = useState({
     title:"",
     description:""
   })

   useEffect( () => {
    const taskFound = tasks.find(t=>t.id===parseInt(id))
     if(taskFound){
       setValid(true)
        setstate({
          title:taskFound.title,
          description:taskFound.description
        })
     }else{
       console.log('creando')
     }
   }, [id, tasks])

 

  const handleSubmit = (e) =>{
    if(valid){
        const task ={...state, id:id}
       updateTask(task)
        toast.info('task updated successfully')
        history.push('/')
    }else{
        addTask(state)
        toast.info('task created successfully')
        history.push('/')
    }


  }

  const inputChange = (e)=>{
     setstate({
       ...state,
        [e.target.name]: e.target.value
     })
  }

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
          <h2 className="text-center mb-2">{valid ? 'Edit Task': 'Create a Task'}</h2>
          <div className="mb-7 text-3x1">
            <input   onChange={inputChange} value={state.title} type="text" name="title" placeholder="write a title" className="py-1 rounded focus:outline-none px-4 focus:text-gray-100 bg-gray-700 w-full" />
          </div>

          <div className="mb-5">
            <input onChange={inputChange}  value={state.description} type="text"name="description" placeholder="write a description" className="py-3 rounded focus:outline-none px-4 focus:text-gray-100 bg-gray-700 w-full" />
          </div>
          <button className="bg-green-600 hover:bg-green-500 py-2 px-10 block mx-auto">{valid ? 'Edit': 'Create'}</button>
      </form>
    </div>
  )
}
