import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`room/${value}`)
  }

  return (
    <div>
      <input type="text" placeholder='Enter Room id'
        onChange={(e) => setValue(e.target.value)}
        name="" id="" />
      <button onClick={handleClick}>Join</button>
    </div>
  )
}

export default Home