import React from "react";

import {TodoContext} from "../context";

import {TodoCounter} from "../components/TodoCounter";
import {TodoSearch} from "../components/TodoSearch";
import {TodoList} from "../components/TodoList";
import {TodoItem} from "../components/TodoItem";
import {CreateTodoButton} from "../components/CreateTodoButton";

import './App.css';

function AppUI() {

    {/*
    Importamos el contexto arriba.

    Podemos usar TodoContext. Consumer más una función anónima, o, como en este
    caso, el hook useContext, el cual recibe un contexto, y de ahi extraemos los datos
    necesarios para que funcione este componente.
     */
    }

    const {searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

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
            <main>
                <div className="container">
                    <div className="search-bar">
                        <TodoCounter/>
                        <TodoSearch/>
                    </div>
                    <TodoList>
                        {/* En lugar de recorrer e insertar la lista de todos los Todos,
                                lo hacemos con los de searchedTodos, que es la que varía según
                                se va escribiendo*/}
                        {searchedTodos.map(todo => (
                            /*Para tratar los elementos li, tenemos que declarar un Key único (pedos de React), por
                            * ahora, vamos a usar el mismo texto, que NO SE DEBERÍA repetir*/
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                isCompleted={todo.isCompleted}
                                completeTodo={() => completeTodo(todo.text)}
                                deleteTodo={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
                    <CreateTodoButton
                        setOpenModal={setOpenModal}
                    />
                </div>
            </main>
        </React.Fragment>
    );
}

export {AppUI};