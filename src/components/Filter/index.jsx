import React from "react";
import { connect } from "react-redux";
import { filterTask } from "../../actions";

import "./Filter.sass";

const Filter = ({ tabFilter, filterTask }) => {

    const nameButton = {
        Все: "allTask",
        Важные: "importantTask",
        Выполненые: "doneTask",
    };

    const renderBtn = () => {
        const btnArr = [];
        let id = 0;
        for (const key in nameButton) {
            btnArr.push(
                <button
                    className={
                        tabFilter === nameButton[key]
                            ? `${nameButton[key]} checked`
                            : nameButton[key]
                    }
                    key={id++}
                >
                    {key}
                </button>
            );
        }
        return btnArr;
    };

    return (
        <div
            className="filterButton"
            onClick={(e) =>
                e.target.className !== `${tabFilter} checked`
                    ? filterTask(e.target.className)
                    : null
            }
        >
            {renderBtn()}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        tabFilter: state.tabFilter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filterTask: (value) => dispatch(filterTask(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
