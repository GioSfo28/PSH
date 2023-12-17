import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-indigo-700 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-600 duration-500'>
      {props.children}
    </button>
  )
}

export default Button;