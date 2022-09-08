import React from "react";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {CreateTodoButton} from "../CreateTodoButton";
import './App.css';

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
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
                        <TodoCounter
                            totalTodos={totalTodos}
                            completedTodos={completedTodos}
                        />
                        <TodoSearch
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
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
                    <CreateTodoButton/>
                </div>
            </main>
        </React.Fragment>
    );
}

export {AppUI};