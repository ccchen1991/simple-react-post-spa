import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PostAction from '../actions/postAction';
import PostTable from '../components/postTable';

function mapStateToProps(state) {
    return {
        postList: state.postReducer.postList,
        loading: state.postReducer.loading,
        error: state.postReducer.error
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PostAction, dispatch);
}

const PostTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PostTable);

export default PostTableContainer;