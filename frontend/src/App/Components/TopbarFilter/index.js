import React, { Component } from 'react'

class TopbarFilter extends Component {
  render() {
    return (
      <div className='topbarfilter'>
        <div className='tobarfilter-title'>
          {this.props.title}
        </div>
        <div className='floatright'>
            <small>Ordenado por: </small>
            <select className='select-no-border' onChange={ event => this.props.handleOrder( event.target.value ) }>
                <option value='rate'>Melhor avaliação</option>
                <option value='date'>Data de publicação</option>
            </select>
        </div>
        <hr className='topbar-filter'/>
      </div>
    )
  }
}

export default TopbarFilter
