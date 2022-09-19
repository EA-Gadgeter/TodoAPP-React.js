import React from "react";
import {TodoContext} from "../../context";
import "./TodoForm.css";

function TodoForm() {

    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const cancelTodoSubmit = () => {
        setOpenModal(false);
    };

    const changeTodoSubmit = (event) => {
        setNewTodoValue(event.target.value);
    }

    const submitTodo = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={submitTodo}>
            <label>Añade un Todo!</label>
            <textarea
                placeholder="Crea tu primer TODO..."
                value={newTodoValue}
                onChange={changeTodoSubmit}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={cancelTodoSubmit}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--submit"
                >
                    Añadir TODO
                </button>
            </div>
        </form>
    )
}

export {TodoForm};