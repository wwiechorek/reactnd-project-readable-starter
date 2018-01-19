import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts, clearPosts } from '../../../actions/posts'
import ItemBlog from '../../../Components/ItemBlog'
class Home extends Component {

  componentWillMount() {
    this.props.clearPosts()
    this.props.loadPosts()
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <ItemBlog key={post.id} data={post} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  posts: store.posts.data
})

const mapDispatchToProps = dispatch => ({
  loadPosts: (data) => dispatch(loadPosts(data)),
  clearPosts: () => dispatch(clearPosts()),
})

export default connect( mapStateToProps, mapDispatchToProps )(Home)