import React from 'react';

const Todo=({onClick,completed,text})=>{

  return (
    <li onClick={onClick}
        style={{textDecoration:completed?'line-through':"none",
                color:completed?'red':'black'
              }}>
              {text}
    </li>
  )
}

export default Todo;
