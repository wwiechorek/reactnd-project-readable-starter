import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RateActionPost from '../../Components/RateActionPost'


class ItemBlog extends Component {
  render() {
    const post = this.props.data
    let date = new Date(post.timestamp).toLocaleDateString()
    return (
        <div className='box-item-blog'>
            <Link to={`/${post.category}/${post.id}`}>
                <div className='blog-title'>
                    {post.title}
                </div>
                <div className='blog-body'>
                    {post.body}
                </div>
            </Link>
            <RateActionPost id={post.id} inline score={post.voteScore} />
            
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
            
        </div>
    )
  }
}


export default ItemBlog