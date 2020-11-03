import React from "react";
import { connect } from "react-redux";

import { completeTask, deleteTask, favoriteTask } from "../../actions";

import "./TodoItem.sass";

const TodoItem = ({
    message,
    done,
    important,
    id,
    deleteTask,
    completeTask,
    favoriteTask,
}) => {
    const addStyleClass = () => {
        let classNameText = "task-text";
        if (important) {
            classNameText += " text_is_important";
        }
        if (done) {
            classNameText += " text_is_done";
        }
        return classNameText;
    };

    return (
        <div className="item">
            <span className={addStyleClass()} onClick={() => completeTask(id)}>
                {message}
            </span>
            <div className="wrapperRemoveFavorites">
                <button className="buttonRemove" onClick={() => deleteTask(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button
                    className="buttonFavorites"
                    onClick={() => favoriteTask(id)}
                >
                    <i className="fas fa-star"></i>
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(deleteTask(id)),
        completeTask: (id) => dispatch(completeTask(id)),
        favoriteTask: (id) => dispatch(favoriteTask(id)),
    };
};

export default connect(null, mapDispatchToProps)(TodoItem);
