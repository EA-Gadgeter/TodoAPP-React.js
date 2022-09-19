import React from "react";

function TodoCounter({totalTodos, completedTodos}) {
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODO's</h2>
    );
}

export {TodoCounter};