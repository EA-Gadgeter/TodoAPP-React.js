import React from "react";
import "./TodoList.css"

function TodoList(props) {
    return (
        <section className="TodoList">
            <ul>
                {/*
                    Dentro de la lista, usamos el método props.children, para poner dentro
                    VARIOS componentes TodoItem, aquí lo importante es que son varios.
                */}
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};