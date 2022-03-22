import React from 'react'
import {Todoitem} from "./Todoitem";


export const Todos = (props) => {
    return (
        <div className="cointainer">
            <h3 className="text-center"> Todos list</h3>
            {props.todos.map((todo)=>{
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                

            })}
            
        </div>
    )
}
