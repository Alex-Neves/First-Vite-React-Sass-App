import React from 'react'

function Newsletter() {
  return (
    <div className="newsLetter">
      <h2>Sign Up for our Newsletter!</h2>
      <div className='submissionBox'>
        <input type="email" placeholder="Please enter your email address"/>
        <input type="submit" value="SUBSCRIBE!"/>
      </div>
    </div>
  )
}

export default Newsletter