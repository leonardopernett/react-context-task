


export const reducer = (state, action) =>{
   
    if(action.type==="ADD_TASK"){
      return {
        ...state,
        tasks: [...state.tasks, action.payload ]
      }
    }

    if(action.type==="DELETE_TASK"){
      return {
        ...state,
        tasks: state.tasks.filter(t=>t.id!==action.payload)
      }
    }

    if(action.type==="EDIT_TASK"){
      const newTask = action.payload
       state.tasks.map(t=>{
         if(t.id ===parseInt(newTask.id)){
            t.title = newTask.title
            t.description = newTask.description
         }
       })
        return {
          ...state,
          tasks:[...state.tasks]
        }
    }
  return state


}