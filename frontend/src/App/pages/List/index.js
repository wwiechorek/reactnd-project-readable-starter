import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../../../actions/posts'
import ItemBlog from '../../../Components/ItemBlog'
import TopbarFilter from '../../../Components/TopbarFilter'
class Home extends Component {

  componentWillMount() {
    this.props.loadPosts()
  }

  render() {
    return (
      <div>
        <TopbarFilter title='Home' handleOrder={ this.handleOrder } />
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
  loadPosts: (data) => dispatch(loadPosts(data))
})

export default connect( mapStateToProps, mapDispatchToProps )(Home)