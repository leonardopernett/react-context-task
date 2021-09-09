import React, { useContext } from 'react'
import { Context } from 'context/GlobalContext'
import { Link } from 'react-router-dom'

export default function List() {

  const { tasks, deleteTask } = useContext(Context)
  
  return (
    <div className="flex justify-center">
        <div className="w-6/12">
        {
          tasks.length > 0 ? (
            tasks.map(task=>(
              <div key={task.id} className="bg-gray-900 py-5 px-4 items-center text-white shadow-2xl mb-4 flex justify-between">
                 <div>
                   <h5>{task.id}</h5>
                    <h5>{task.title}</h5>
                    <p>{task.description}</p>
                 </div>
  
                 <div className="div">
                   <Link to={`/edit/${task.id}`} className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2 rounded">Edit</Link>
                   <button className="bg-red-600 hover:bg-red-500 py-2 px-4 rounded" onClick={()=>deleteTask(task.id)}>
                      delete
                   </button>
                 </div>
              </div>
            ))
          ):(
            <p>task not yet</p>
          )
        }
      </div>
      
    </div>
  )
}
