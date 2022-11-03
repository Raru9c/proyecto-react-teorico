import React from "react";
import "./styles/TodoSearch.css"

function TodoSearch( {searchValue, setSearchValue} ){



    const SearchValueChange = (event) => {
        console.log (event.target.value)
        setSearchValue (event.target.value)

    }

    return (
        <input placeholder="Indique lo que quiera buscar" className="TodoSearch"
        value={searchValue} onChange={SearchValueChange}/>
        
    );
}
export {TodoSearch};