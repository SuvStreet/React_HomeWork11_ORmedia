const defaultState = {
    setId: 100,
    toDoList: [
        { message: "Task 1", important: false, done: false, id: 1 },
        { message: "Task 2", important: false, done: false, id: 2 },
        { message: "Task 3", important: false, done: false, id: 3 },
        { message: "Task 4", important: false, done: false, id: 4 },
        { message: "Task 5", important: false, done: false, id: 5 },
    ],
    tabFilter: "allTask",
    searchInputValue: "",
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    {
                        message: action.payload,
                        important: false,
                        done: false,
                        id: state.setId,
                    },
                ],
                setId: ++state.setId,
            };
        case "DELETE_TASK":
            return {
                ...state,
                toDoList: state.toDoList.filter((i) => i.id !== action.id),
            };
        case "COMPLETE_TASK":
            return {
                ...state,
                toDoList: state.toDoList.map((i) =>
                    i.id === action.id ? { ...i, done: !i.done } : i
                ),
            };
        case "FAVORITE_TASK":
            return {
                ...state,
                toDoList: state.toDoList.map((i) =>
                    i.id === action.id ? { ...i, important: !i.important } : i
                ),
            };
        case "FILTER_TASK":
            return {
                ...state,
                tabFilter: action.tab,
            };
        case "SEARCH_TASK":
            return {
                ...state,
                searchInputValue: action.value,
            };
        default:
            return state;
    }
};

export default reducer;
