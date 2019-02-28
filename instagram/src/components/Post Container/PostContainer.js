import React from 'react'
import CommentSection from '../Comment Section/CommentSection'


function PostContainer(props) {
    return (
        <div>
            {props.postDataSet.map((post, i) => (
                <div className='postContainer' key={i}>
                    <div className='postHeader'>
                        <img src={post.thumbnailUrl} alt={post.username}/>
                        <h3>{post.username}</h3>
                    </div>
                    <div className='postContent'>
                        <img src={post.imageUrl} alt={post.username}/>
                    </div>
                    <CommentSection 
                    likes={post.likes}
                    comments={post.comments} 
                    increaseLikes={post.increaseLikes}
                    handleCommentChange={post.handleCommentChange}
                    />
                </div>
            ))}
        </div>
    );
}






export default PostContainer;