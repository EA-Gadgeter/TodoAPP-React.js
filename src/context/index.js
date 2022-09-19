import React from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

/* El contexto de nuestra aplicación, en este caso
 es toda la siguiente lógica, que también es donde
 estaría la App final*/

function TodoProvider (props){

    /* Para evitar otro tipo de lógica que no sea manejar el estado de la aplicación
    creamos un Custom Hook para ello, ir al archivo para más info */
    const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

    /*
        searchValue es el valor de nuestro estado
        setSearchValue es la función para actualizar el estado
    */
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal]  = React.useState(false);

    /*
       Para poder saber la cantidad de Todos que están completos, podemos
       usar un .filter() para generar una arreglo con solo los Todos
       completados, y de ahí usamos el atributo length
    */
    const completedTodos = todos.filter(todo => todo.isCompleted).length;
    const totalTodos = todos.length;

    // Creamos un arreglo vació para guardar los Todos depende de lo que se busque
    let searchedTodos;


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
            return todoText.includes(searchText);
        });
    }

    /*
        IMPORTANTE

        No usamos setTodos, ya que en sí, NO ha cambiado el estado de los Todos.
        Siguen siendo la misma cantidad de Todos y ninguno ha cambiado internamente, SOLO estamos
        eligiendo cuáles renderizar y cuáles no mediante un arreglo de Todos secundario.

        En el siguiente caso, SI que cambia el estado...
    */

    // Función que busca Todos por el texto de la tarea, para completarlos
    const completeTodo = (todoText) => {
        // Buscamos el índice de la tarea por su texto, es un parámetro de la función
        const todoIndex = todos.findIndex(todo => todo.text === todoText);

        /*
            Como cambio el estado de una tarea, necesitamos volver a renderizar los Todos con
            setTodos, pero no podemos pasarle el mismo arreglo, por lo que creamos una copia.
        */
        const newTodos = [...todos];

        newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted; // Hacemos el cambio en la tarea a eliminar.
        // Guardamos el estado de los Todos con la nueva lista
        saveTodos(newTodos);
    }

    const addTodo = (todoText) => {
      const newTodos = [...todos];

      newTodos.push({
          text: todoText,
          isCompleted: false
      });

      saveTodos(newTodos);
    };

    const deleteTodo = (todoText) => {
        // Aquí también cambia el estado, ya que la lista de Todos se ve modificado al
        // eliminar uno, por lo que tenemos que usar setTodos
        const todoIndex = todos.findIndex(todo => todo.text === todoText);
        const newTodos = [...todos];

        newTodos.splice(todoIndex, 1); // Solo borra 1
        saveTodos(newTodos);
    }

    return (
        /* Creamos el proveedor de nuestro contexto, que va
        a devolver un objeto con todos los datos necesarios para
        el resto de los componentes*/
        <TodoContext.Provider
            value={{
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                addTodo,
                deleteTodo,
                openModal,
                setOpenModal,
            }}
        >
            {/*La siguiente línea es muy importante, es lo que nos permite
            poder pasar las los datos a cualquier hijo, sin tener que
            hacerlo pasándolo de archivo en archivo*/}
            {props.children}
        </TodoContext.Provider>
    );
}
// Exportamos el contexto, y el proveedor
export {TodoContext, TodoProvider};