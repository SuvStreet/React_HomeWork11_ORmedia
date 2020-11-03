import React, { useState } from "react";
import { connect } from "react-redux";

import { addTask } from "../../actions";

import "./AddTask.sass";

const AddTask = ({ addTask }) => {
    const [value, setValue] = useState("");

    const checkEmpte = (e) => {
        e.preventDefault();
        if (value.trim() !== "") {
            addTask(value);
            setValue("");
        }
    };

    return (
        <form className="wrapperInputTask" onSubmit={checkEmpte}>
            <input
                className="inputTask"
                type="text"
                placeholder="Добавить задачу..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="addBtn">
                <span>Добавить</span>
            </button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (value) => dispatch(addTask(value)),
    };
};

export default connect(null, mapDispatchToProps)(AddTask);
