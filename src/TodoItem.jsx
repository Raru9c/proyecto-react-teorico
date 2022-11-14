import React from "react";
import "./styles/TodoItem.css"

function TodoItem(props) {
    const onDelete = () => {
        alert ("Has borrado la tarea de " + props.text)
    }

    return(
        <li className= "TodoItem">
            <span className={`Icon-check ${props.completed && 'Icon-check--active'}`} 
            onClick= {props.onComplete}>
            √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}>X</span>
        </li>
    );
}

export { TodoItem };