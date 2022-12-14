import React from "react";
import "./TodoItem.css"
import logoDelete from "../../assets/img/delete.png";
import logoCheck from "../../assets/img/check.png";
import logoChange from "../../assets/img/change.png";

function TodoItem({text, isCompleted, completeTodo, deleteTodo, setOpenChangeModal}) {

    const changeClick = () => {
        setOpenChangeModal(text);
    }

    return (
        <li className="TodoItem">

            {/*
                Recordemos que TodoList es un <section>
                con una <ul> dentro, razón por la que
                nuestro TodoItem es un <li>.

                La X es nuestro botón para quitar las tareas

                TodoItem recibe la propiedad props.text por medio de los
                props, que es la tarea en sí.
            */}

            {/*Gracias a JSX podemos agregar condicionales al agregar
                condicionales a la hora de agregar clases, lo siguiente lo
                podemos leer como: si isCompleted es verdadero, agrega la
                clase Icon--completed*/}
            <img

                className={`Icon Icon--complete ${isCompleted && "Icon--completed"}`}
                src={logoCheck}
                alt="check logo"
                onClick={completeTodo}
            />
            <p className={`TodoItem-text ${isCompleted && "TodoItem-text--completed"}`}>
                {text}
            </p>
            <div className="Icon__modify-options">
                <img
                    className={`Icon Icon--delete`}
                    src={logoDelete}
                    alt="delete logo"
                    onClick={deleteTodo}
                />
                <img
                    className={`Icon Icon--change`}
                    src={logoChange}
                    alt="change logo"
                    onClick={changeClick}
                />
            </div>
        </li>
    );
}

export {TodoItem};