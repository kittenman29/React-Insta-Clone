import React from 'react';

function CommentSection(props) {
    console.log(props.comments);
    return ( 
        <>
        <div>
            <p>Heart</p>
            <p>Comment</p>
            <p>{props.likes}</p>
        </div>
        <div className='commentContainer'>
            {props.comments.map(comment => (
                <div>
                    <p><strong>{comment.username}</strong> {comment.text}</p>
                </div>
            ))}
        </div>
        <input 
        type='text' 
        placeholder='Add comment' 
        value={''} 
        onChange={''}/>
        </>
    )
}

export default CommentSection;