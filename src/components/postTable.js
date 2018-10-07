import React from 'react';
import PostModal from './postModal';
export default class PostTable extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
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
            this.props.postList.map(post =>
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )
        );
    }

    render() {
        return (
            <div>
                <PostModal postPost={this.props.postPost}/>
                <table className="ui fixed table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Body</th>
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