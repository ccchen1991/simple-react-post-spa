export const requestPosts = () => {
    return {
        type: 'REQUEST_POSTS',
        loading: true,
        error: null
    }
}

export const requestPostsSuccess = (postList) => {
    return {
        type: 'REQUEST_POSTS_SUCCESS',
        postList,
        loading: false,
        error: null
    }
}

export const requestPostsError = (error) => {
    return {
        type: 'REQUEST_POSTS_ERROR',
        loading: false,
        postList: [],
        error
    }
}

export const fetchPosts = () => {
    return function (dispatch) {
        dispatch(requestPosts());

        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(
                response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error("404");
                }
            )
            .then(json =>
                dispatch(requestPostsSuccess(json))
            ).catch(error => {
                console.error(error);
                dispatch(requestPostsError(error))
            })
    }
}

export const requestPostPost = () => {
    return {
        type: 'REQUEST_POST_POST',
        loading: true,
        error: null
    }
}

export const requestPostPostSuccess = (post) => {
    return {
        type: 'REQUEST_POST_POST_SUCCESS',
        post,
        loading: false,
        error: null
    }
}

export const postPost = (post) => {
    return function (dispatch) {
        dispatch(requestPostPost());

        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post)
        })
        .then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("404");
            }
        )
        .then(json =>
            dispatch(requestPostPostSuccess(json))
        ).catch(error => {
            console.error(error);
            dispatch(requestPostsError(error))
        })
    }
}  