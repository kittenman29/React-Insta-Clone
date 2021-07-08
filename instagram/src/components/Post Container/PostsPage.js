import React, { Component } from 'react';
import dummyData from '../../dummy-data'
import PostContainer from '../Post Container/PostContainer'
import SearchBar from '../SearchBar/SearchBar'


class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchData: []
    }
  }

  componentDidMount(){
    console.log('mounted')
    this.setState({ dummyData: dummyData })
  }

  searchBarHandler = e => {
    const posts = this.state.dummyData.filter( post => {
      if (post.username.includes(e.target.value)) {
        return post
      }
    });
    this.setState({
      searchData: posts
    })
  }

  addNewComment = (e, username, commentText) => {
    e.preventDefault();
    const newComment={
        username: 'Name',
        text: commentText
    }
    this.setState({
      dummyData: this.state.dummyData.map(post => {
          console.log(post.username, username)
        if(post.username===username){
            return {
                ...post,
                comments: [...post.comments, newComment]
            }
        } else {
            return post;
        }
      })
    })
  }

  

  increaseLikes = () => {
    this.setState({
      likes: this.state.likes +1
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchBarHandler}/>
        <PostContainer 
          postDataSet={
            this.state.searchData.length > 0 ?
            this.state.searchData :
            this.state.dummyData
          }
          addNewComment={this.addNewComment}
          handleCommentChange={this.handleCommentChange}
        />
      </div>
    );
  }
}


export default PostPage;