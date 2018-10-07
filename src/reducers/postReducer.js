const initState = {
    postList: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case 'REQUEST_POSTS':
            return {
                ...state,
                loading: action.loading,
                postList: []
            };
        case 'REQUEST_POSTS_SUCCESS':
            return {
                ...state,
                loading: action.loading,
                postList: action.postList
            };
        case 'REQUEST_POSTS_ERROR':
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        case 'REQUEST_POST_POST':
            return {
                ...state,
                loading: action.loading
            };
        case 'REQUEST_POST_POST_SUCCESS':
            return {
                ...state,
                loading: action.loading,
                postList: [...state.postList, action.post]
            };
        default:
            return state;
    }
}