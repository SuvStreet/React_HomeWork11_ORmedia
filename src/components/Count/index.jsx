import React from "react";
import { connect } from "react-redux";

import "./Count.sass";

const Count = ({ toDoList }) => {
    
    const favoriteTask = toDoList.filter(i => i.important === true).length;
    const doneTask = toDoList.filter(i => i.done === true).length;
    const activeTask = toDoList.length - doneTask;

    // компонент
    return (
        <div className="wrapperPrintCount">
            <p>
                Количество выполненых задач: <span>{doneTask}</span>
            </p>
            <p>
                Количество избранных задач: <span>{favoriteTask}</span>
            </p>
            <p>
                Количество активных задач: <span>{activeTask}</span>
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        toDoList: state.toDoList,
    };
};

export default connect(mapStateToProps, null)(Count);
