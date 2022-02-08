import React from 'react'
import Header from '../header/Header'
const options = [
  {
    name: 'Enable both scrolling & backdrop',
    scroll: true,
    backdrop: true,
  },
]

const Home = () => {
  return (
    <div>
      {options.map((props, idx) => (
        <Header key={idx} {...props}></Header>
      ))}
    </div>
  )
}

export default Home
