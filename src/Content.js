import React from 'react'
import {useState} from 'react'

export const Content = () => {
    const [name, setName] = useState('leshan')
    const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['bob', 'kavin', 'dave'];
        const int = Math.floor(Math.random() * 3)
        setName(names[int]);
    }

    const handleClick = () => {
      setCount(count + 1);
      console.log(count);
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`);
    }
    const handleClick3 = (e) => {
      console.log(e.target.innerText);
    }

  return (
    <main>
        <p>Hello {name} </p>
        <p>Count {count}</p>
        <button onClick={handleNameChange}>name change</button>
        <button onClick={() => {
          handleClick();
        }}>click it</button>
        <button onClick={(e) => {handleClick3(e)}}>click it</button>
    </main>
  )
}

export default Content;
