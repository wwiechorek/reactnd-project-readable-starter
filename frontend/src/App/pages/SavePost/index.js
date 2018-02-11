import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

import { connect } from 'react-redux'
import { loadPost, savePost } from '../../../actions/posts'
import { createPost } from '../../../utils/posts'


class EditPost extends Component {
  state = {
    type: 'create',
    body: '',
    title: '',
    author: '',
    category: '',
    id: null
  }
  
  componentDidMount() {
    if(this.props.match.params.id) {
      this.props.loadPost(this.props.match.params.id)
      this.setState( state => ({
        ...state,
        type: 'edit'
      }))
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.type !== 'edit') return

    
    if(nextProps.post) {
      this.setState({
        ...this.state,
        body: nextProps.post.body,
        title: nextProps.post.title,
        id: nextProps.post.id,
        author: nextProps.post.author,
        category: nextProps.post.category
      })
    }
  }


  handleSave() {
    if(this.state.title === '' || this.state.body === '' || this.state.category === '') return

    let id = this.state.id

    if(this.state.type === 'edit') {

      this.props.savePost( id, {
        title: this.state.title,
        body: this.state.body,
        category: this.state.category        
      })

      this.props.history.push('/post/'+id)
      
    } else {
      id = uuid()
      createPost( {
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        id,
        timestamp: new Date().getTime(),
        category: this.state.category
      })
      .then( data => {
        this.props.history.push('/post/'+data.id)
      })
    }
    
  }

  render() {

    return (
      <div>
        <h1 className='post-title'>
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
        </h1>
        <div className='clearfix'>
          <input
              value={this.state.author}
              onChange={ e => {
                  this.setState({
                      ...this.state,
                      author: e.target.value
                  })
              }}
              placeholder='Author'
              className='form-control'
              disabled={this.state.type === 'edit'}
              style={{
                fontSize: '14px'
              }} />
            <br />
        </div>

        <div className='clearfix'>
          <select
            value={this.state.category}
            onChange={ e => {
              this.setState({
                  ...this.state,
                  category: e.target.value
              })
            }}
            className='form-control'            
            >
            <option value=''>Selecione uma categoria</option>
            { this.props.categories.map( category => (
                <option key={category.path} value={category.path}>
                  {category.name}
                </option>
            )) }
            </select>
            <br />
        </div>

        <div className='post-body'>
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
        </div>
        
          <div style={{ float: 'right', width: '100%', marginBottom: '30px', textAlign: 'right' }}>
            {this.state.type === 'edit' && (
              <button type='reset' onClick={ () => this.props.history.push('/post/'+this.state.id) } className='btn-link'> Cancelar </button>
            )}
              <button type='submit' className='btn' onClick={() => this.handleSave()}>
                {this.state.type === 'edit' ? 'Salvar' : 'Publicar'}
              </button>
          </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  post: store.posts.data[0],
  categories: store.categories.data
})

const mapDispatchToProps = dispatch => ({
  loadPost: (data) => dispatch(loadPost(data)),
  savePost: (id, data) => dispatch(savePost(id, data))
})

export default connect( mapStateToProps, mapDispatchToProps )(EditPost)