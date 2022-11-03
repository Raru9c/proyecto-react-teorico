import React from 'react';
import "./styles/TodoCounter.css";

function ToDoCounter ( { totalTodos, completed} ) {
    return (
        <h1 className="TodoCounter"> Has realizado {completed} de {totalTodos}</h1>
    );
};

export {ToDoCounter};

