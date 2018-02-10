import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPosts, loadPostsCategory } from '../../../actions/posts'
import ItemBlog from '../../Components/ItemBlog'
import TopbarFilter from '../../Components/TopbarFilter'
class List extends Component {
  state = {
    title: 'Todas categorias',
    category: '',
    order: 'rate'
  }

  componentWillMount() {
    this.handleLoadPosts(this.props.match.params.category)

  }


  componentWillUpdate(nextProps, nextState) {
    let category = nextProps.match.params.category
    
    if(category !== this.props.match.params.category)
    this.handleLoadPosts(category)

    if(this.props.categories !== nextProps.categories || nextProps.categories.length > 0) {
      if(nextState.category !== '') {
        let title = nextProps.categories.find(category => category.path === nextState.category).name
        
        if(title !== this.state.title) {
          this.setState({
            title
          })
        }
      }
    }


    if(this.props.posts !== nextProps.posts) {
      this.setState({
        posts: nextProps.posts
      }, () => this.applyFilter())
    }
  }

  handleLoadPosts(category = '') {
    if(category)
      this.props.loadPostsCategory(category)
    else
      this.props.loadPosts()
    
      this.setState({
        ...this.state,
        category
      })
  }

  applyFilter() {
    let posts = this.state.posts
    let order = this.state.order === 'date' ? 'timestamp' : 'voteScore'

    posts = posts.sort( (a, b) => a[order] < b[order] )
    
    this.setState({
      posts
    })
  }

  handleOrder(order) {
    this.setState({
      order
    }, () => this.applyFilter())
  }

  render() {
    return (
      <div>
        <TopbarFilter title={this.state.title} handleOrder={ (order) => this.handleOrder(order) } />
        {this.props.posts.length > 0 && this.props.posts.map(post => (
          <ItemBlog key={post.id} data={post} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = store => ({
  posts: store.posts.data,
  categories: store.categories.data
})

// const mapDispatchToProps = dispatch => ({
//   loadPosts: (data) => dispatch(loadPosts(data)),
//   loadPostsCategory: (data) => dispatch(loadPostsCategory(data)),
// })

const mapDispatchToProps = {
  loadPosts,
  loadPostsCategory
}

export default connect( mapStateToProps, mapDispatchToProps )(List)