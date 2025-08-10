import React from 'react'
import {useState} from 'react'

export const Content = () => {
    const [items, setItems] = useState([
      {
        id: 1,
        chacked: false,
        item: "One half pound bag of cocoa Almonds Unsalted", 
       },
      {
        id: 2,
        chacked: false,
        item: "Item 2", 
       },
      {
        id: 3,
        chacked: false,
        item: "Item 3", 
       },
    ])

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content;
