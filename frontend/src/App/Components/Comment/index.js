import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { votePost } from '../../../actions/posts'

class Comment extends Component {
    render() {
        return (
            <div>
                {console.log(this.props.data)}
            </div>
        )
    }
}

const mapStateToProps = store => ({})

const mapDispatchToProps = dispatch => ({
    // votePost: (id, inc) => dispatch(votePost(id, inc))
})

export default connect( mapStateToProps, mapDispatchToProps )(Comment)