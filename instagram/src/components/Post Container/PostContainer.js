import React from 'react'
import CommentSection from '../Comment Section/CommentSection'
import styled from 'styled-components'

const PostHeader = styled.div`
    display: flex;
    margin: 0 29%;
`;

const HeaderImage = styled.img`
    border-radius: 50%;
    max-height: 3rem;
    margin: 0.25rem .25rem .25rem 0;
`;

const HeaderText = styled.h3`
    font-size: 1.75rem;
`;


function PostContainer(props) {
    return (
        <div>
            {props.postDataSet.map((post, i) => (
                <div className='postContainer' key={i}>
                    <PostHeader>
                        <HeaderImage src={post.thumbnailUrl} alt={post.username}/>
                        <HeaderText>{post.username}</HeaderText>
                    </PostHeader>
                    <div className='postContent'>
                        <img src={post.imageUrl} alt={post.username}/>
                    </div>
                    <CommentSection 
                    likes={post.likes}
                    comments={post.comments} 
                    increaseLikes={post.increaseLikes}
                    username={post.username}
                    addNewComment={props.addNewComment}
                    handleCommentChange={props.handleCommentChange}
                    />
                </div>
            ))}
        </div>
    );
}






export default PostContainer;