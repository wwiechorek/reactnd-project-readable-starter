import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rate from '../../Components/Rate'
import { deleteComment } from '../../../actions/comments'
import BtnsActions from '../../Components/BtnsActions'


class Comment extends Component {
    handleDelete(id) {
        this.props.deleteComment(id)
    }
    handleEdit(id) {
        // alert(id)
    }

    render() {
        const date = new Date(this.props.data.timestamp)
        return (
            <div style={{marginBottom: '20px'}}>
                <div className='post-rate'>
                    <BtnsActions
                        handleDelete={
                            () => this.handleDelete(this.props.data.id)
                        }
                        handleEdit={
                            () => this.handleEdit(this.props.data.id)
                        }/>
                    <Rate id={this.props.data.id} type='comment' score={this.props.data.voteScore} />
                </div>
                <b>{this.props.data.author}</b>
                <span> - </span>
                <span style={{ color: '#ccc'}}>
                    {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}
                </span>
                <br />
                {this.props.data.body}
            </div>
        )
    }
}

const mapStateToProps = store => ({})

const mapDispatchToProps = dispatch => ({
    deleteComment: id => dispatch(deleteComment(id))
})

export default connect( mapStateToProps, mapDispatchToProps )(Comment)