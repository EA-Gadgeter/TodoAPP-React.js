import React from "react";
import {TodoContext} from "../../context";
import "./TodoSearch.css"

function TodoSearch() {

    const {setSearchValue, searchValue} = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        // Cambiamos el estado cada vez que cambie el valor del input
        setSearchValue(event.target.value);
    }

    return (
        <input
            className="TodoSearch"
            placeholder="Buscar tarea..."
            value={searchValue} // Necesitamos pasarlo, Componentes controlados, cosas de React...
            onChange={onSearchValueChange}
        />
    );
}

export {TodoSearch};