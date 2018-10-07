import React from 'react';

export default class TodoTable extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderRow() {
        if (this.props.loading) {
            return (
                <tr><th colSpan="4"><div>Loading...</div></th></tr>
            );
        } else if (this.props.error) {
            return (
                <tr><th colSpan="4"><div>{this.props.error.message}</div></th></tr>
            );
        }

        return (
            this.props.todoList.map(todo =>
                <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.userId}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? 'true' : 'false'}</td>
                </tr>
            )
        );
    }

    render() {
        return (
            <div>
                <table className="ui single line table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Is Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}