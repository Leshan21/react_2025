import React from 'react'

function counter() {
    const obj = {
        count: 0,
        tag : ['tag1', 'tag2', 'tag3']
    };
  return (
    <div> 
      <ul>
        {obj.tag.map(tag => <li key={tag}>{tag}</li>)}
      </ul>
    </div>
  )
}

export default counter
