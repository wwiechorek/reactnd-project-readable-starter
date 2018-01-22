import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../../../actions/comments'
import Comment from '../Comment'
class Comments extends Component {
    
    componentWillMount() {
        this.props.loadComments(this.props.id)
    }

    render() {
        const { comments } = this.props
        return (
            <div className='post-commnets'>
                <h3> Comentários ({comments.length}) </h3>
                { comments.map( comment => (
                    <Comment key={comment.id} data={comment} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = store => ({
    comments: store.comments.data,
})

const mapDispatchToProps = dispatch => ({
    loadComments: (data) => dispatch(loadComments(data))
})

export default connect( mapStateToProps, mapDispatchToProps )(Comments)