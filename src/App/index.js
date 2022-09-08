import React from "react";
import {AppUI} from "./AppUI";

const defaultTodos = [
    {text: "Cortar cebolla", isCompleted: true},
    {text: "Terminar curso de ES6+", isCompleted: false},
    {text: "Ver anime", isCompleted: false},
]

// El que "Index" empiece con mayúsculas, indica que es un componente
function App() {

    /*
        searchValue es el valor de nuestro estado
        setSearchValue es la función para actualizar el estado
    */
    const [searchValue, setSearchValue] = React.useState("");
    const [todos, setTodos] = React.useState(defaultTodos);

     /*
        Para poder saber la cantidad de Todos que están completos, podemos
        usar un .filter() para generar una arreglo con solo los Todos
        completados, y de ahí usamos el atributo length
     */
    const completedTodos = todos.filter(todo => todo.isCompleted).length;
    const totalTodos = todos.length;

    // Creamos un arreglo vació para guardar los Todos depende de lo que se busque
    let searchedTodos = [];


    /* Si la longitud del valor del searchValue es menor a 1, es porque el usuario no ha
     escrito nada, por lo que mostramos todos los objetos */
    if (searchValue.length < 1){
        searchedTodos = todos;
    } else {
        /* En caso contrario, filtramos los Todos con el valor actual del searchValue,
        pasamos tanto este como los textos del los Todos a minúsculas, para evitar problemas.

        Regresamos un arreglo con los Todos que empiezan con el valor de searchValue

        RECORDEMOS QUE EL VALOR DE SEARCHVALUE SE ACTUALIZA EN TIEMPO REAL DESDE EL COMPONENTE
        TODOSEARCH*/
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.startsWith(searchText);
        });
    }

    /*
        IMPORTANTE

        No usamos setTodos, ya que en sí, NO ha cambiado el estado de los Todos.
        Siguen siendo la misma cantidad de Todos y ninguno ha cambiado internamente, SOLO estamos
        eligiendo cuáles renderizar y cuáles no mediante un arreglo de Todos secundario.

        En el siguiente caso, SI que cambia el estado...
    */

    // Funcion que busca Todos por el texto de la tarea, para completarlos
    const completeTodo = (todoText) => {
        // Buscamos el índice de la tarea por su texto, es un parametro de la funcion
        const todoIndex = todos.findIndex(todo => todo.text === todoText);

        /*
            Como cambio el estado de una tarea, necesitamos volver a renderizar los Todos con
            setTodos, pero no podemos pasarle el mismo arreglo, por lo que creamos una copia.
        */
        const newTodos = [...todos];

        newTodos[todoIndex].isCompleted =  true; // Hacemos el cambio en la tarea a eliminar.
        // Cambiamos el estado de los Todos con la nueva lista
        setTodos(newTodos);
    }

    const deleteTodo = (todoText) => {
        // Aquí también cambia el estado, ya que la lista de Todos se ve modificado al
        // eliminar uno, por lo que tenemos que usar setTodos
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const newTodos = [...todos];

        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    }

    return (
        <AppUI
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
        />
    );
}

export {App};
