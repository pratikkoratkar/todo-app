import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
    return (
        <div className="cointainer">
            {/* <h4>{todo.sno}</h4> */}
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
        </div>
        
    )
}
