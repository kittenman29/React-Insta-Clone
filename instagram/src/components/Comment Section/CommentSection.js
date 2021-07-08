import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CommentContainer = styled.div`
    text-align: left;
    margin-left: 30%;
`;

const Comment = styled.div`
    color: red;
`;


class CommentSection extends React.Component {
    constructor() {
        super();
        this.state = {
          comment: ''
        }
      }

      handleCommentChange = e => {
        this.setState({ comment: e.target.value })
      }

      handleSubmit = e => {
          this.props.addNewComment(e, this.props.username, this.state.comment)
          this.setState({
              comment: ''
          })
      }

    render() {  
    return ( 
        <>
        <div>
            <p onClick={this.props.increaseLikes}>Heart</p>
            <p>Comment</p>
            <p>{this.props.likes} likes</p>
        </div>
        <CommentContainer>
            {this.props.comments.map((comment, i) => (
                <Comment key={i}>
                    <p><strong>{comment.username}</strong> {comment.text}</p>
                </Comment>
            ))}
        </CommentContainer>
        <form onSubmit={this.handleSubmit}>
            <input 
            type='text' 
            placeholder='Add comment' 
            value={this.state.comment} 
            onChange={this.handleCommentChange}
            />
        </form>
        </>
    )
}
}

CommentSection.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;