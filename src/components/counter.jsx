import React from 'react'

function counter() {
    const count = 0;
  const formatCount = () => {
    return count === 0 ? <h1>Zero</h1> : count;
  }
  return (
    <div>
      <span>{formatCount()}</span>
      <button>Increment</button>
    </div>
  )
}

export default counter
