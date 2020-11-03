import React from "react";
import { connect } from "react-redux";

import { searchTask } from "../../actions";

import "./SearchInput.sass";

const SearchInput = ({ searchTask }) => {

    return (
        <div className="inputAliveSearch">
            <input
                type="text"
                placeholder="Найти задачу..."
                className="aliveSearch"
                onInput={(e) => searchTask(e.target.value)}
            />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchTask: (value) => dispatch(searchTask(value)),
    };
};

export default connect(null, mapDispatchToProps)(SearchInput);
