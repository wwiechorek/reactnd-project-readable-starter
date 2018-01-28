import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rate from '../../Components/Rate'
import { deleteComment, saveComment } from '../../../actions/comments'
import BtnsActions from '../../Components/BtnsActions'

class Comment extends Component {
    state = {
        isEdit: false,
        message: ''
    }

    handleDelete(id) {
        this.props.deleteComment(id)
    }
    handleToggleEdit() {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    componentWillMount() {
        this.setState({
            ...this.state,
            body: this.props.data.body,
            timestamp: this.props.data.timestamp
        })
    }

    handleSave(event, id) {
        event.preventDefault()
        if(this.state.body === '') return

        this.handleToggleEdit()
        this.props.saveComment(id, this.state)

    }

    render() {
        const date = new Date(this.props.data.timestamp)
        return (
            <div style={{marginBottom: '20px', float: 'left', width: '100%'}}>
                {!this.state.isEdit && (
                    <div className='post-rate'>
                        <BtnsActions
                            handleDelete={
                                () => this.handleDelete(this.props.data.id)
                            }
                            handleEdit={
                                () => this.handleToggleEdit()
                            }/>
                        <Rate id={this.props.data.id} type='comment' score={this.props.data.voteScore} />
                    </div>
                )}
                <b>{this.props.data.author}</b>
                <span> - </span>
                <span style={{ color: '#ccc'}}>
                    {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                </span>
                <br />
                {this.state.isEdit ?
                <form method='post' style={{marginBottom: '30px'}} onSubmit={ e => this.handleSave(e, this.props.data.id) }>
                    <textarea
                        value={this.state.body}
                        onChange={ e => {
                            this.setState({
                                ...this.state,
                                body: e.target.value
                            })
                        }}
                        className='form-control' />
                    <br />
                    <div style={{ float: 'right' }}>
                        <button type='reset' onClick={ () => this.handleToggleEdit() } className='btn-link'> Cancelar </button>
                        <button type='submit' className='btn'>Salvar</button>
                    </div>
                </form>
                : this.props.data.body}
            </div>
        )
    }
}

const mapStateToProps = store => ({})

const mapDispatchToProps = dispatch => ({
    deleteComment: id => dispatch(deleteComment(id)),
    saveComment: (id, data) => dispatch(saveComment(id, data)),
})

export default connect( mapStateToProps, mapDispatchToProps )(Comment)