import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadCategories } from '../../../actions/categories'

class Menu extends Component {
    state = {
        menuOpen: false,
        menuSelected: ''
    }

    componentWillMount() {
        this.props.loadCategories()
    }

    toggleMenu = () => {
        this.setState( state => ({
            ...state,
            menuOpen: !state.menuOpen
        }))
    }

    menuSelected = () => {
        this.toggleMenu()
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='menu'>
                <div className='menu-icon' onClick={ this.toggleMenu }>
                    <i className='fa fa-bars' />
                </div>
                <div className={`menu-right ${ this.state.menuOpen ? 'active' : '' }`}>
                    <div className='menu-close' onClick={ this.toggleMenu }>
                        <i className="fa fa-long-arrow-left"></i> Voltar
                    </div>
                    
                    <ul>
                        <li> <Link onClick={ this.menuSelected } to={`/`}> Todas categorias </Link> </li>                    
                        { this.props.categories.map( category => (
                            <li key={category.path}>
                                <Link onClick={ this.menuSelected } to={`/${category.path}`}>{category.name}</Link>
                            </li>
                        )) }
                        <li className='menu-divider' />
                        <li> <Link onClick={ this.menuSelected } to={`/create`}> Criar novo post </Link> </li>
                    </ul>
                </div>
                <div className='menu-box-shadow' onClick={ this.toggleMenu } />
            </div>
        )
    }
}

const mapStateToProps = store => ({
    categories: store.categories.data
})

const mapDispatchToProps = dispatch => ({
    loadCategories: (data) => dispatch(loadCategories(data))
})

export default connect( mapStateToProps, mapDispatchToProps )(Menu)