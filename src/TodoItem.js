import React from "react";

function TodoItem(props) {
    return (
        <li>

            {/*
                Recordemos que TodoList es un <section>
                con una <ul> dentro, razón por la que
                nuestro TodoItem es un <li>.

                La X es nuestro botón para quitar las tareas

                TodoItem recibe la propiedad props.text por medio de los
                props, que es la tarea en sí.
            */}

            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export {TodoItem};