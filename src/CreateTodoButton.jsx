
import React from "react";
import "./styles/CreateTodoButton.css"

function CreateTodoButton(){

const onClickButton = (msg) => {   
    alert (msg)    
}

    return(
        <button className="button" onClick={() => onClickButton ("Ahora estas usando arrow function para encapsular la varieble")}>
            Presiona
        </button>
        
    );
}

export {CreateTodoButton};
