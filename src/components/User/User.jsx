import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {id}= useParams()
  return (
    <div className=' text-center bg-gray-600 'test-white text-3xl p-4> User: {id}</div>
  )
}

export default User
