import React, { Component } from 'react';

class PostRow extends Component {
    render() {
        const { error, isLoaded, posts } = this.props.data;
        if (error) {
            return <tr><th colSpan="4"><div>{error}</div></th></tr>;
        } else if (!isLoaded) {
            return <tr><th colSpan="4"><div>Loading...</div></th></tr>;
        } else {
            return (
                posts.map(post =>
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                )
            );
        }
    }
}

export default PostRow;