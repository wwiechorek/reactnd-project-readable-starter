import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../../../actions/posts'
import RateActionPost from '../../Components/RateActionPost'

import Comments from '../../Components/Comments'
class Home extends Component {

  state = {
    body: '',
    title: '',
    id: null
  }

  componentWillMount() {
    this.props.loadPost(this.props.match.params.id)
  }

  componentWillReceiveProps(nextProps) {

    if(!nextProps.post || !nextProps.post.id)
      this.props.history.push('/')

    
    if(nextProps.post) {
      this.setState({
        ...this.state,
        body: nextProps.post.body,
        title: nextProps.post.title,
        id: nextProps.post.id,
      })
    }
  }

  render() {

    const post = this.props.post
    if(!post) return <div />
    const date = new Date(post.timestamp).toLocaleDateString()

    
    return (
      <div>
        <h1 className='post-title'>
          {post.title}
        </h1>
        <div className='clearfix'>
          <div className='post-author'> Por {post.author} </div>
          <div className='post-data'> {date} </div>
          
          <RateActionPost id={this.props.post.id} score={post.voteScore} />
          
        </div>
        <div className='post-body'>
          {post.body}
        </div>

        <Comments id={this.props.match.params.id} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  post: store.posts.data[0],
})

const mapDispatchToProps = dispatch => ({
  loadPost: (data) => dispatch(loadPost(data)),
})

export default connect( mapStateToProps, mapDispatchToProps )(Home)