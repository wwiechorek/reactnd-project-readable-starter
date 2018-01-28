import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../../actions/comments'
import * as ids from '../../../helpers/id'

class SaveComment extends Component {
    state = {
        author: '',
        message: ''
    }

    handleSubmit(evt) {
        evt.stopPropagation()
        evt.preventDefault()

        let author = this.state.author
        let message = this.state.message
        let id = ids.generate()

        if(author === '' || message === '') return

        this.props.createComment({
            parentId: this.props.parentId,
            body: message,
            author,
            id,
            timestamp: new Date().getTime()
        })

        this.setState({
            author: '',
            message: ''
        })
    }

    render() {
        return (
            <form method='post' style={{marginBottom: '30px'}} onSubmit={ e => this.handleSubmit(e) }>
                <h3>Novo comentário:</h3>
                <label>
                    Autor: <br />
                </label>
                <input
                    type='text'
                    value={this.state.author}
                    onChange={ e => {
                        this.setState({
                            ...this.state,
                            author: e.target.value
                        })
                    }}
                    className='form-control' />
                <br />
                <label>
                    Comentário:
                    <br />                
                </label>
                <textarea
                    value={this.state.message}
                    onChange={ e => {
                        this.setState({
                            ...this.state,
                            message: e.target.value
                        })
                    }}
                    className='form-control' />
                <br />
                <button type='submit' className='btn'>Salvar</button>
            </form>
        )
    }
}

const mapStateToProps = store => ({})

const mapDispatchToProps = dispatch => ({
    createComment: data => dispatch(createComment( data ))
})

export default connect( mapStateToProps, mapDispatchToProps )(SaveComment)