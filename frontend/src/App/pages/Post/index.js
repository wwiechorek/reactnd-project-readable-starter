import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPost, savePost } from '../../../actions/posts'
import { deletePost } from '../../../utils/posts'

import BtnsActions from '../../Components/BtnsActions'
import Rate from '../../Components/Rate'
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
    if(!nextProps.post.id)
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

  handleDelete(id) {
    deletePost(id)
    .then( d => {
      this.props.history.push('/')
    })
  }

  handleEdit() {
    this.props.history.push('/post/' + this.state.id + '/edit')    
  }

  handleSave() {
    if(this.state.title === '' || this.state.body === '') return

    this.props.savePost( this.state.id, {
      title: this.state.title,
      body: this.state.body,
    })
    
    this.setState({
      ...this.state,
      isEdit: false
    })

  }

  render() {

    const post = this.props.post
    if(!post) return <div />
    const date = new Date(post.timestamp)
    
    return (
      <div>
        <h1 className='post-title'>
          {post.title}
        </h1>
        <div className='clearfix'>
          <div className='post-author'> Por {post.author} </div>
          <div className='post-data'> {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`} </div>
          
          <div className='post-rate'>
            <BtnsActions
              handleDelete={
                () => this.handleDelete(this.props.post.id)
              }
              handleEdit={
                () => this.handleEdit()
              }/>
            <Rate id={post.id} type='post' score={post.voteScore} />
          </div>
          
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
  savePost: (id, data) => dispatch(savePost(id, data)),
})

export default connect( mapStateToProps, mapDispatchToProps )(Home)