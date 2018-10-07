import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoAction from '../actions/todoAction';
import TodoTable from '../components/todoTable';

function mapStateToProps(state) {
    return {
        todoList: state.todoReducer.todoList,
        loading: state.todoReducer.loading,
        error: state.todoReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(TodoAction, dispatch);
}

const TodoTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoTable);

export default TodoTableContainer;