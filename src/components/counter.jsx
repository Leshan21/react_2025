import React from 'react'

function counter() {
    const obj = {
        count: 0,
       
    };



  const formatCount = () => {
    return obj.count === 0 ? "Zero" : obj.count;
  }
  return (
    <div>
      
      <span style={{
        fontSize: 30,
        fontWeight: 'bold',
    
      }} className='badge badge-primary m-2'>{formatCount()}</span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
    </div>
  )
}

export default counter
