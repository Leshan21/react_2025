import React from 'react'

export const Content = () => {

    const handleNameChange = () => {
        const names = ['bob', 'kavin', 'dave'];
        const int = Math.floor(Math.random() * 3)
        return names[int];
    }

    const handleClick = () => {
      console.log('Button clicked');
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`);
    }
    const handleClick3 = (e) => {
      console.log(e.target.innerText);
    }

  return (
    <main>
        <p>Hello {handleNameChange()} </p>
        <button onClick={handleClick}>click it</button>
        <button onClick={() => {
          handleClick2('bob');
        }}>click it</button>
        <button onClick={(e) => {handleClick3(e)}}>click it</button>
    </main>
  )
}

export default Content;
