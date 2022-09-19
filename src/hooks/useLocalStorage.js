import React from "react";

/*
    Custom Hook para obtener y guardar el localStorage

   Un Custom Hook debe contener:
       - Dentro algún default de React
       - Debe regresar un arreglo con el estado y el setter
*/

function useLocalStorage(itemName, initialValue) {
    // Obtenemos los datos del localStorage
    const localStorageItem = localStorage.getItem(itemName);

    /* Puede que es la primera vez que el usuario usa la app
    para eso creamos la variable parsedTodos y el condicional de abajo.*/
    let parsedItem;
    if (!localStorageItem) {
        // Si no hay registro del item, nosotros lo creamos pasando una lista vacía
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue; // parsedTodos sera una lista vacía
    } else {
        // Si hay registro, eso es lo que guardamos en parsedTodos
        parsedItem = JSON.parse(localStorageItem);
    }

    // Pasamos parsedTodos como el estado por defecto
    const [item, setItem] = React.useState(parsedItem);

    // Función que además de actualizar el estado de los Todos, actualiza el localStorage
    const saveItems = (newItems) => {
        setItem(newItems);
        localStorage.setItem(itemName, JSON.stringify(newItems));
    }

    return [item, saveItems];
}

export {useLocalStorage};