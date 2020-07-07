import React from 'react'

function PostItem({post}){
  return(
    <div className="post">
      <div className="info-post">
        <img src={post.author.avatar} alt={post.author.name}/>
        <div className="info">
          <p className="info-name">{post.author.name}</p>
          <p className="info-date">{post.date}</p>
        </div>
      </div>
      <div className="content"><p>{post.content}</p></div>
      <hr/>
      <div className="comments">
        {post.comments.map(comment => <PostComments 
        key={comment.id} 
        comment={comment}/>
        )}
      </div>
    </div>
  )
}

function PostComments({comment}){
  return(
    <div className="comment" >
      <img src={comment.author.avatar} alt={comment.author.name}/>
      <div className="comment-content">
        <p><span>{comment.author.name}</span>{comment.content}</p>
      </div>
    </div>
  )
}

export default PostItem