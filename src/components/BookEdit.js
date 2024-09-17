import React, { useState } from 'react'

const BookEdit = ({book , onSubmit}) => {
    const[title, setTitle] = useState(book.title);

    const handleChange = (event)=>{
        setTitle(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        onSubmit(book.id, title);
    }
  return (
    <form onSubmit = {handleSubmit} className='book-edit'>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange}/>
        <button>Save</button>
      
    </form>
  )
}

export default BookEdit
