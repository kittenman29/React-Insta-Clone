import React from 'react';

function CommentSection(props) {
    console.log(props.comments);
    return ( 
        <>
        <div>
            <p onClick={props.increaseLikes}>Heart</p>
            <p>Comment</p>
            <p>{props.likes} likes</p>
        </div>
        <div className='commentContainer'>
            {props.comments.map((comment, i) => (
                <div className='commentContainer' key={i}>
                    <p><strong>{comment.username}</strong> {comment.text}</p>
                </div>
            ))}
        </div>
        <form>
            <input 
            type='text' 
            placeholder='Add comment' 
            value={props.comments} 
            onChange={props.handleCommentChange}
            />
        </form>
        </>
    )
}

export default CommentSection;