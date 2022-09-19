import React from "react";
import {TodoContext} from "../../context"
import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal}) {

    const {openChangeModal} = React.useContext(TodoContext);

    const modalClick = () => {
        setOpenModal(prevState => !prevState);
    }

    return (
        <button
            className={`CreateTodoButton ${openChangeModal==="" && "ActiveTodoButton"}`}
            onClick={modalClick}
        >
            +
        </button>
    );
}

export {CreateTodoButton};