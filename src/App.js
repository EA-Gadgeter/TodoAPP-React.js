import React from "react";
import {TodoCounter} from "./TodoCounter";
import {TodoSearch} from "./TodoSearch";
import {TodoList} from "./TodoList";
import {CreateTodoButton} from "./CreateTodoButton";
import {TodoItem} from "./TodoItem";
// import './App.css';

const todos = [
    {text: "Cortar cebolla", completed: false},
    {text: "Terminar curso de ES6+", completed: false},
    {text: "Ver anime", completed: false},
]

// El que "App" empiece con mayúsculas, indica que es un componente
function App() {
    return (
        /*
            ¿Cuál es la diferencia entre un elemento y una etiqueta HTML?
            Lo de abajo NO es HTML en sí, son elementos que se pueden crear
            con React.createElement(), pero mediante la sintaxis JSX, nos permite
            verlo como etiquetas HTML, que lo hace más legible.

            BABEL se encarga de traducirlo a JavaScript.
        */

        /*
            React SOLO puede regresar un componente al trabajar con JSX,
            si queremos regresar varios componentes necesitamos encerrarlos
            en un solo elemento padre.

            Para lo anterior podríamos usar <div>, pero eso nos dara luego un caos
            al implementar CSS, por lo que usamos el componente Fragment que nos
            proporciona React o también podemos usar etiquetas vacías
        */
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map(todo => (
                    /*Para tratar los elementos li, tenemos que declarar un Key único (pedos de React), por
                    * ahora, vamos a usar el mismo texto, que NO SE DEBERÍA repetir*/
                    <TodoItem key={todo.text} text={todo.text}/>
                ))}
            </TodoList>
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {App};
