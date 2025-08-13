import React from 'react'

function counter() {
    const obj = {
        count: 0,
        tag : ['tag1', 'tag2', 'tag3']
    };

  let classes = getBadgeClasses();

  const formatCount = () => {
    return obj.count === 0 ? "Zero" : obj.count;
  }
  return (
    <div>

      <span style={{
        fontSize: 30,
        fontWeight: 'bold',

      }} className={classes}>{formatCount()}</span>
      <button className='btn btn-secondary btn-sm'>Increment</button>
      <ul>
        {obj.tag.map(tag => <li>{tag}</li>)}
      </ul>
    </div>
  )

    function getBadgeClasses() {
        let classes = "badge m-2";
        if (obj.count === 0) {
            classes += " bg-warning";
        } else {
            classes += " bg-primary";
        }
        return classes;
    }
}

export default counter
