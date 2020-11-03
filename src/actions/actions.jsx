export const addTask = (value) => {
    return {
        type: "ADD_TASK",
        payload: value,
    };
};

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        id: id,
    };
};

export const completeTask = (id) => {
    return {
        type: "COMPLETE_TASK",
        id: id,
    };
};

export const favoriteTask = (id) => {
    return {
        type: "FAVORITE_TASK",
        id: id,
    };
};

export const filterTask = (value) => {
  return {
      type: "FILTER_TASK",
      tab: value,
  };
};

export const searchTask = (value) => {
  return {
      type: "SEARCH_TASK",
      value: value,
  };
};