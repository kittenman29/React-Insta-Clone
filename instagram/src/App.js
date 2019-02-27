import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/Post Container/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount(){
    console.log('mounted')
    this.setState({ dummyData: dummyData })
  }

  // handleCommentChange = eTargetValue => {
  //   this.setState({ comment: eTargetValue })
  // }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        postData={this.state.dummyData} 
        handleCommentChange={this.handleCommentChange}
        />
      </div>
    );
  }
}

export default App;
