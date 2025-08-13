import React from 'react'

function counter() {
    const obj = {
        count: 0,
        tags : []
    };

    const renderTags = () => {
      if(obj.tags.length === 0 ) return <p>There are no tags !</p>;
      return <ul>{obj.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
    
    const handleEvnt = () => {
      console.log("Button clicked");
    }
  return (
   <>
    {obj.tags.length === 0 && "Please create a new tag !"} 
    {renderTags()}
    <button onClick={handleEvnt} className='btn btn-secondary btn-sm'>btn</button>
   </>
  )
}

export default counter
