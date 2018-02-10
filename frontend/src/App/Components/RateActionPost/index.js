import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { deletePost } from '../../../actions/posts'

import BtnsActions from '../../Components/BtnsActions'
import Rate from '../../Components/Rate'

class RateActionPost extends Component {
   
    state = {
        id: null,
        voteScore: 0
    }

    componentWillMount() {
        this.componentWillReceiveProps(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            voteScore: nextProps.score
        })
    }

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
                        () => this.handleDelete(this.state.id)
                    }
                    handleEdit={
                        () => this.handleEdit()
                }/>
                <Rate id={this.state.id} type='post' score={this.state.voteScore} />
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