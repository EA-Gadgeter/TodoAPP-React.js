import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal}) {

    const modalClick = () => {
        setOpenModal(prevState => !prevState);
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={modalClick}
        >
            +
        </button>
    );
}

export {CreateTodoButton};