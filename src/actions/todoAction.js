export const requestTodos = () => {
    return {
        type: 'REQUEST_TODOS',
        loading: true,
        error: null
    }
}

export const requestTodosSuccess = (todoList) => {
    return {
        type: 'REQUEST_TODOS_SUCCESS',
        todoList,
        loading: false,
        error: null
    }
}

export const requestTodosError = (error) => {
    return {
        type: 'REQUEST_TODOS_ERROR',
        loading: false,
        todoList: [],
        error
    }
}

export const fetchTodos = () => {
    return function (dispatch) {
        dispatch(requestTodos());

        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error("404");
                }
            )
            .then(json =>
                dispatch(requestTodosSuccess(json))
            ).catch(error => {
                console.error(error);
                dispatch(requestTodosError(error))
            })
    }
}