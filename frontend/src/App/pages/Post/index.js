import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPost } from '../../../actions/posts'
import Rate from '../../Components/Rate'
import Comments from '../../Components/Comments'
class Home extends Component {
  componentWillMount() {
    this.props.loadPost(this.props.match.params.id)
  }

  render() {

    const post = this.props.post
    if(!post) return <div />
    const date = new Date(post.timestamp)
    
    return (
      <div>
        <h1 className='post-title'> {post.title} </h1>
        <div className='clearfix'>
          <div className='post-author'> Por {post.author} </div>
          <div className='post-data'> {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`} </div>
        
          <div className='post-rate'> <Rate id={post.id} type='post' score={post.voteScore} /> </div>
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
  loadPost: (data) => dispatch(loadPost(data))
})

export default connect( mapStateToProps, mapDispatchToProps )(Home)