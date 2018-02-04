import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ItemBlog extends Component {
  render() {
    const post = this.props.data
    let date = new Date(post.timestamp)
    let day = date.getDay()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    day = day > 9 ? day : `0${day}`
    month = month > 9 ? month : `0${month}`

    date = `${ day }/${ month }/${ year }`

    return (

        <Link to={`/post/${post.id}`} className='box-item-blog'>
            <div className='blog-title'>
                {post.title}
            </div>
            <div className='blog-body'>
                {post.body}
            </div>
            <div className='blog-score-comments'>
                ({post.commentCount}) Comentários | Nota: {post.voteScore}
            </div>
            <div className='blog-info'>
                <div className='blog-info-author'>
                    Por <b>{post.author}</b>
                </div>
                <div className='blog-info-date'>
                    {date}
                </div>
            </div>
        </Link>
    )
  }
}


export default ItemBlog