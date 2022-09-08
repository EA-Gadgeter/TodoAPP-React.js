import React from "react";
import "./TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {

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