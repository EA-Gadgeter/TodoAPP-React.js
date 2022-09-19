import React from "react";
import {TodoContext} from "../../context";

function TodoCounter() {

    const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO's</h2>
    );
}

export {TodoCounter};