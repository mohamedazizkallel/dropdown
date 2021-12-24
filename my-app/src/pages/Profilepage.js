import React from 'react'
//import { useNavigate } from 'react-router-dom'

function Profilepage() {
  return (
    <div class='form-container'>
      <form class='register-form'>
        <input
          id='first-name'
          class='form-field'
          type='text'
          placeholder='First Name'
          name='firstName'
        />

        <input
          id='last-name'
          class='form-field'
          type='text'
          placeholder='Last Name'
          name='lastName'
        />

        <input
          id='email'
          class='form-field'
          type='text'
          placeholder='Email'
          name='email'
        />
        <input
          id='Type of user'
          class='form-field'
          type='text'
          placeholder='Type of user'
          name='Type of user'
        />

        <button class='form-field' type='submit'>
          <a href='./pages/cards'>Register</a>
        </button>
      </form>
    </div>
  )
}
export default Profilepage
