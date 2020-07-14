const initialState = {
    todosList: [
        { id: 1, content: 'do household chores', isCompleted: false },
        { id: 2, content: 'do homework', isCompleted: false },
        { id: 3, content: 'do exercise', isCompleted: false },
    ],
    filter: "all"
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            const todosList = [...state.todosList, {
                id: Math.random().toString(36).substr(2, 5),
                content: action.content,
                isCompleted: false,
            }];
            return { ...state, todosList };
        }
        case "COMPLETED_TODO": {
            // cach 1:
            // const todosList = [...state.todosList]
            // let index = todosList.findIndex(item => item.id === action.toDoId);
            // if (action.toDoId === todosList[index].id) {
            //     todosList[index].isCompleted = true;
            // }

            // cach 2:
            const todosList = state.todosList.map((todo) => {
                if (todo.id === action.toDoId) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    };
                }
                return todo;
            })
            return { ...state, todosList }
        }
        case "FILTER_TODO": {
            return {...state, filter: action.status}
        }
        default:
            return state;
    }
};

export default todosReducer;