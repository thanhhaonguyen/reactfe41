export const addTodo = (content) => {
    // return an object
    return {
        // mandatory for type
        type: "ADD_TODO",
        content, // content: content
    };
}

export const completedTodo = (toDoId) => {
    return {
        type: "COMPLETED_TODO",
        toDoId,
    };
}

export const filterTodo = (status) => {
    return {
        type: "FILTER_TODO",
        status,
    }
}
