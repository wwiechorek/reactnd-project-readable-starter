import React, { Component } from 'react'
import { connect } from 'react-redux'
import { votePost } from '../../../actions/posts'
import { voteComment } from '../../../actions/comments'

class Rate extends Component {
    handleVote(inc) {
        switch (this.props.type) {
            case 'post':
                this.props.votePost(this.props.id, inc)
                break;
                
            case 'comment':
                this.props.voteComment(this.props.id, inc)
                break;
                
            default:
                break;
        }
    }
    render() {
        return (
            <div className='rate'>
                <span style={{
                        fontSize: '12px',
                        position: 'relative',
                        top: '-2px'
                    }}>&#9733;</span>
                {this.props.score} 
                

                <div style={{
                    color: '#bc1616',
                    cursor: 'pointer',
                    fontSize: '24px',
                    float: 'right',
                    transform: 'rotate(180deg)',
                    position: 'relative',
                    top: '-8px'
                }}
                onClick={ () => this.handleVote(-1) }>
                    &#8963;
                </div>

                <div style={{
                    color: '#35843e',
                    cursor: 'pointer',
                    fontSize: '24px',
                    float: 'right',
                    margin: '0 5px'
                }}
                onClick={ () => this.handleVote(+1) }>
                    &#8963;
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => ({})

const mapDispatchToProps = dispatch => ({
    votePost: (id, inc) => dispatch(votePost(id, inc)),
    voteComment: (id, inc) => dispatch(voteComment(id, inc)),
})

export default connect( mapStateToProps, mapDispatchToProps )(Rate)