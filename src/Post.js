import React, { Component } from 'react';
import PostRow from './PostRow';
import PostModal from './PostModal';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
        this.submitPost = this.submitPost.bind(this);
    }

    submitPost(post) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: post.title,
                body: post.body,
                userId: post.userId
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            let posts = this.state.posts;
            posts.push(json);
            this.setState({
                posts: posts
            });
        });
    }
    
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        posts: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>
                <PostModal submitPost={this.submitPost}/>
                <table className="ui single line table">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Post ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PostRow data={this.state} />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Post;