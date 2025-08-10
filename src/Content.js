import React from 'react'
import {useState} from 'react'
import {FaTrashAlt} from 'react-icons/fa'

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

    const handleCheck = (id) => 
    {
      const listitems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
      setItems(listitems)
    } 
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" onChange={() => {
              handleCheck(item.id)
            }} checked={item.checked} />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content;
