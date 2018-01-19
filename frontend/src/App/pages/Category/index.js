import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPostsCategory, clearPosts } from '../../../actions/posts'
import ItemBlog from '../../../Components/ItemBlog'

import TopbarFilter from '../../../Components/TopbarFilter'

class Category extends Component {
  state = {
    categoryName: '',
    posts: []
  }

  loadPost(category) {
    this.props.clearPosts()
    this.props.loadPostsCategory(category)    
  }

  componentWillMount() {
    this.loadPost(this.props.match.params.category)
    this.componentWillReceiveProps(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.category !== this.props.match.params.category) {  
      this.loadPost(nextProps.match.params.category)
    }

    let category = nextProps.categories.find( category => category.path === nextProps.match.params.category)
    if(category) {
      this.setState({
        ...this.props.category,
        categoryName: category.name
      })
    }

    if(nextProps.posts !== this.props.posts) 
    this.setState({
      ...this.state,
      posts: nextProps.posts
    })
    
  }

  handleOrder = (order) => {
    console.log(order)
  }

  render() {
    return (
      <div>
        <TopbarFilter title={this.state.categoryName} handleOrder={ this.handleOrder } />

        {this.state.posts.map(post => (
          <ItemBlog key={post.id} data={post} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  posts: store.posts.data,
  categories: store.categories.data,
})

const mapDispatchToProps = dispatch => ({
  loadPostsCategory: (data) => dispatch(loadPostsCategory(data)),
  clearPosts: () => dispatch(clearPosts())
})

export default connect( mapStateToProps, mapDispatchToProps )(Category)
