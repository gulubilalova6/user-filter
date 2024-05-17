import React from 'react'
import cl from "./User.module.css"

const User = ({ el }) => {
  return (
    <div className='user-card'>
      <h2>{el.name}</h2>
<div>{el.age}</div>
<div>{el.country}</div>

    </div>
  )
}

export default User
