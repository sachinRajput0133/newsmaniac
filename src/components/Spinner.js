import React from 'react'
import Loading from './loading.gif'

export default function Spinner() {
  return (
    <div className='container text-center my-5'>
      <img className='text-center'src={Loading} alt='loading'  />
    </div>
  )
}
