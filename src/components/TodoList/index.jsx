import React from "react";
import { connect } from "react-redux";

import TodoItem from "../TodoItem";

const TodoList = ({ toDoList, tabFilterChecked, searchInputValue }) => {
    const searchTask = toDoList.filter((todo) =>
        todo.message.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    const filterTask = searchTask.filter((todo) => {
        switch (tabFilterChecked) {
            case "allTask":
                return todo;
            case "importantTask":
                if (todo.important) {
                    return todo;
                } else break;
            case "doneTask":
                if (todo.done) {
                    return todo;
                } else break;
            default:
                throw new Error("нет фильтра " + tabFilterChecked);
        }
    });

    const elements = filterTask.map((item) => {
        const { id, ...itemProps } = item;
        return <TodoItem {...itemProps} key={id} id={id} />;
    });

    return <div className="wrapperTask">{elements}</div>;
};

const mapStateToProps = (state) => {
    return {
        toDoList: state.toDoList,
        tabFilterChecked: state.tabFilter,
        searchInputValue: state.searchInputValue,
    };
};

export default connect(mapStateToProps, null)(TodoList);
