import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

export default class PostModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            postTitle: '',
            postBody: '',
            userId: 1
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.updatePostTitle = this.updatePostTitle.bind(this);
        this.updatePostBody = this.updatePostBody.bind(this);
    }

    handleOpenModal() {
        this.setState({
            openModal: true
        });
    }

    handleCloseModal(e) {
        e.preventDefault()
        if(this.state.postTitle && this.state.postBody){
            const post = {
                title: this.state.postTitle,
                body: this.state.postBody,
                userId: this.state.userId
            }
            this.props.postPost(post);
        }
        this.setState({
            openModal: false,
            postBody: '',
            postTitle: ''
        });
    }

    updatePostTitle(e) {
        this.setState({
            postTitle: e.target.value
        })
    }

    updatePostBody(e) {
        this.setState({
            postBody: e.target.value
        });
    }

    render() {
        return (
            <Modal size="small" closeIcon
                open={this.state.openModal}
                onClose={this.handleCloseModal}
                trigger={<Button primary onClick={this.handleOpenModal}>New Post</Button>}>
                <Modal.Header>New Post</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <label>Post Title</label>
                            <input placeholder='Title' onChange={this.updatePostTitle} />
                        </Form.Field>
                        <Form.Field>
                            <label>Post Body</label>
                            <input placeholder='Body' onChange={this.updatePostBody} />
                        </Form.Field>
                        <Button type='submit' positive onClick={this.handleCloseModal}>Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}