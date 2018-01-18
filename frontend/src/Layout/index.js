import React, { Component } from 'react'

import './style.css'

class Layout extends Component {

    state = {
        menuOpen: false
    }

    toggleMenu = () => {
        this.setState( state => ({
            ...state,
            menuOpen: !state.menuOpen
        }))
    } 

    render() {
        return (
            <div>
                <header>
                    <div className='logo'> &lt;Dev /&gt; Blog.</div>
                    <div className='menu-icon' onClick={ this.toggleMenu }>
                        <i className='fa fa-bars' />
                    </div>
                    <div className={`menu-right ${ this.state.menuOpen ? 'active' : '' }`}>
                        <div className='menu-close' onClick={ this.toggleMenu }>
                            <i className="fa fa-long-arrow-left"></i> Voltar
                        </div>
                    </div>
                    <div className='menu-box-shadow' onClick={ this.toggleMenu } />
                </header>
                <div className='container'>
                    <div className="large"> Large </div>
                </div>
            </div>
        )
    }
}

export default Layout