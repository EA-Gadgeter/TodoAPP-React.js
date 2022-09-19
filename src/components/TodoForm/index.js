import React from "react";
import {TodoContext} from "../../context";
import "./TodoForm.css";

function TodoForm({labelText, placeholderText, submitText}) {

    const {addTodo, openModal, setOpenModal, openChangeModal, setOpenChangeModal, changeTodo} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const cancelTodoSubmit = () => {
        if(openModal) setOpenModal(false);
        if(openChangeModal != "") setOpenChangeModal("");
    };

    const changeTodoSubmit = (event) => {
        setNewTodoValue(event.target.value);
    }

    const submitTodo = (event) => {
        event.preventDefault();
        if(openModal) {
            addTodo(newTodoValue);
            setOpenModal(false);
        } 

        if (openChangeModal != "") {
            changeTodo(openChangeModal, newTodoValue);
            setOpenChangeModal("");
        }
        
    }

    return(
        <form onSubmit={submitTodo}>
            <label>{labelText}</label>
            <textarea
                placeholder={placeholderText}
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
                    {submitText}
                </button>
            </div>
        </form>
    )
}

export {TodoForm};