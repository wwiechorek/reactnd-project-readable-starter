import React, { Component } from 'react'
import Menu from '../Menu'

import './style.css'

class Template extends Component {
    
    render() {
        return (
            <div>
                <header>
                    <div className='logo'> &lt;Dev /&gt; Blog.</div>
                    <Menu />
                </header>
                <div className='container'>
                    <div className="large"> 
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Template