const initState = {
    todoList: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'REQUEST_TODOS':
            return {
                ...state,
                loading: action.loading,
                todoList: []
            };
        case 'REQUEST_TODOS_SUCCESS':
            return {
                ...state,
                loading: action.loading,
                todoList: action.todoList
            };
        case 'REQUEST_TODOS_ERROR':
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        default:
            return state;
    }
}