import React from 'react'

export const Add = (props) => {
    const {title,status} = props
  return (
    <div>
        {status === true ? <h1 style={{color:'green'}}>{title}</h1>:<h1 style={{color:'red'}}>{title}</h1>}
    </div>
  )
}
