import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './reducers/todoReducer';
import postReducer from './reducers/postReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    todoReducer,
    postReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default store;
