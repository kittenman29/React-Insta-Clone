import React from 'react'
import CommentSection from '../Comment Section/CommentSection'


function PostContainer(props) {
    return (
        <div>
            {props.postData.map(post => (
                <>
                    <div className='postHeader'>
                        <img src={post.thumbnailUrl} />
                        <h3>{post.username}</h3>
                    </div>
                    <div className='postContent'>
                        <img src={post.imageUrl} />
                    </div>
                    <CommentSection 
                    likes={post.likes}
                    comments={post.comments} 
                    // handleCommentChange={post.handleCommentChange}
                    />
                </>
            ))}
        </div>
    );
}






export default PostContainer;