import React from "react";
import {TodoProvider} from "../context";
import {AppUI} from "./AppUI";

/*const defaultTodos = [
    {text: "Cortar cebolla", isCompleted: true},
    {text: "Terminar curso de ES6+", isCompleted: false},
    {text: "Ver anime", isCompleted: false},
]*/

// El que "App" empiece con mayúsculas, indica que es un componente
function App() {

    return (
        /*Aquí importamos el provider, para que, valga la redundancia, prove,
        gracias a props.children, a los hijos dentro de AppUI los datos necesarios*/
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export {App};
