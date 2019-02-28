import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/Post Container/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import PostsPage from './components/Post Container/PostsPage'
import withAuthenticate from './authentication/authenticate'
import LoginPage from './components/Login/Login'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      searchData: [],
      // comment: ''
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

  addNewComment = e => {
    e.preventDefault();
    this.setState({
      comments: [
        ...this.state.dummyData,
        {
          text: this.state.dummyData.comments,
          username: 'Loser'
        }
      ],
      comment: ''
    })
  }

  handleCommentChange = e => {
    this.setState({ comments: e.target.value })
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
        <PostsPage 
          postData={
            this.state.searchData.length > 0 ?
            this.state.searchData :
            this.state.dummyData
          }
          handleCommentChange={this.handleCommentChange}
        />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(App)(LoginPage);

export default App;
