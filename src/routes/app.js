import React, { Component } from 'react'
import Picker from '../components/Picker/index'
import Posts from '../components/Posts/index'
import { connect } from 'dva-react-router-3'

class App extends Component {
  componentWillMount(){
    const {selectedSubreddit} = this.props.app
    this.props.dispatch({type: 'app/fetchPosts', payload: selectedSubreddit})
  }
  componentDidMount () {
    const {selectedSubreddit} = this.props.app
    this.props.dispatch({type: 'app/fetchPosts', payload: selectedSubreddit})
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.app.selectedSubreddit!==this.props.app.selectedSubreddit){
      this.props.dispatch({type: 'app/fetchPosts', payload: nextProps.app.selectedSubreddit})
    }
  }
  handleChange (value) {
    this.props.dispatch({type: 'app/select_subreddit', payload: value})
  }

  render () {
    const {posts, selectedSubreddit, isFetching} = this.props.app
    return (
      <div>
        <Picker value={selectedSubreddit} onChange={this.handleChange.bind(this)} />
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && <Posts posts={posts} />}
      </div>
    )
  }
}

export default connect(({app}) => ({app}))(App)
