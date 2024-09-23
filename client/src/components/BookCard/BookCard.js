import React from 'react'
import "./BookCard.css"

function BookCard({_id,name,category,image,author,description,price}) {
  return (
<div className='main-container'> 
    <div className='card-container'>
      
 <h1 className='book-title'>{name}</h1>
<span>{author}</span>
<p>{description}</p>
    </div>
    </div>)
}

export default BookCard