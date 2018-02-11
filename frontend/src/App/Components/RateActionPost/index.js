import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { deletePost } from '../../../actions/posts'

import BtnsActions from '../../Components/BtnsActions'
import Rate from '../../Components/Rate'

class RateActionPost extends Component {

    handleDelete(id) {
        this.props.deletePost( id )
    }

    handleEdit() {
        this.props.history.push('/post/' + this.state.id + '/edit') 
    }

    render() {
        return (
            <div className={`post-rate ${this.props.inline ? 'post-rate-inline' : ''}`}>
                <BtnsActions
                    handleDelete={
                        () => this.handleDelete(this.props.id)
                    }
                    handleEdit={
                        () => this.handleEdit()
                }/>
                <Rate id={this.props.id} type='post' score={this.props.voteScore} />
            </div>
        )
    }

}


const mapStateToProps = store => ({
})

const mapDispatchToProps = {
    deletePost
}

RateActionPost = connect( mapStateToProps, mapDispatchToProps )(RateActionPost)
RateActionPost = withRouter(RateActionPost)
export default RateActionPost