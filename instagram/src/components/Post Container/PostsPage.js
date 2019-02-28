import React from 'react'
import PostContainer from './PostContainer'


function PostsPage(props) {
    return (
        <div>
            <PostContainer 
            postDataSet={props.postData}
            handleCommentChanges={props.handleCommentChange}
            />
        </div>
    );
}

export default PostsPage;