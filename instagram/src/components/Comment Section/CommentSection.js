import React from 'react';

function CommentSection(props) {
    console.log(props.comments);
    return (
            
        <>
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