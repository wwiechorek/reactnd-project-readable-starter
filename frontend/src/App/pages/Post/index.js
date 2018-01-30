import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadPost, savePost } from '../../../actions/posts'
import { deletePost } from '../../../utils/posts'

import BtnsActions from '../../Components/BtnsActions'
import Rate from '../../Components/Rate'
import Comments from '../../Components/Comments'
class Home extends Component {

  state = {
    isEdit: false,
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

  handleToggleEdit() {
    this.setState({
        isEdit: !this.state.isEdit
    })
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
          {!this.state.isEdit ? post.title : (
            <div>
              <input
                value={this.state.title}
                onChange={ e => {
                    this.setState({
                        ...this.state,
                        title: e.target.value
                    })
                }}
                style={{
                  fontSize: '28px'
                }}
                placeholder='Titulo'
                className='form-control' />
              <br />
            </div>
          )}
        </h1>
        <div className='clearfix'>
          <div className='post-author'> Por {post.author} </div>
          <div className='post-data'> {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`} </div>
          {!this.state.isEdit && (
            <div className='post-rate'>
              <BtnsActions
                handleDelete={
                  () => this.handleDelete(this.props.post.id)
                }
                handleEdit={
                  () => this.handleToggleEdit()
                }/>
              <Rate id={post.id} type='post' score={post.voteScore} />
            </div>
          )}
        </div>
        <div className='post-body'>
          {!this.state.isEdit ? post.body : (
            <div>
              <textarea
                rows={20}
                value={this.state.body}
                onChange={ e => {
                    this.setState({
                        ...this.state,
                        body: e.target.value
                    })
                }}
                className='form-control'
                style={{
                  fontSize: '14px'
                }} />
              <br />
            </div>
          )}
        </div>
        
        {this.state.isEdit && (
          <div style={{ float: 'right', width: '100%', textAlign: 'right' }}>
              <button type='reset' onClick={ () => this.handleToggleEdit() } className='btn-link'> Cancelar </button>
              <button type='submit' className='btn' onClick={() => this.handleSave()}>Salvar</button>
          </div>
        )}

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