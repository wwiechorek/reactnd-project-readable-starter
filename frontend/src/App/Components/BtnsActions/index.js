import React, { Component } from 'react'

export default class BtnsActions extends Component {

    render() {
        return(
            <div className='btn-actions-bar'>
                <span style={{
                    cursor: 'pointer',
                    padding: '4px',
                    color: 'blue'
                }}
                onClick={this.props.handleEdit}>
                    &#9998;
                </span>

                <span style={{
                    cursor: 'pointer',
                    padding: '4px',
                    color: 'red',
                    fontSize: '22px'
                }}
                onClick={this.props.handleDelete}>
                    &#215;
                </span>
            </div>
        )
    }
}