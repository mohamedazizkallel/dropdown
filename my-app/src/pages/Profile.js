import React from 'react'
import { useHistory } from 'react-router-dom'

function Profilepage() {
  let history = useHistory()
  history.push('/App')
  return (
    <div>
      <input type='text' placeholder='username' />
      <input type='text' placeholder='userlastname' />
      <input type='text' placeholder='age' />
      <input type='text' placeholder='occupation' />
      <button
        onClick={() => {
          history.push('/App')
        }}
      >
        return
      </button>
    </div>
  )
}
export default Profile
