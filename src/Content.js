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
  return (
    <main>
        <p>Hello {handleNameChange()} </p>
        <button onClick={handleClick}>click it</button>
    </main>
  )
}

export default Content;
