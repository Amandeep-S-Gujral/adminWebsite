import React from 'react'

const SignInBox = () => {
    return(
        <div id='signIn'>
            <input className='inputBox1' type='email' placeholder='email*' required/>
            <input className='inputBox1' type='password' placeholder='password*' required/>
            <input className='inputBox1' type='text' placeholder='referral code' />
            <button className='button3'>Sign in</button>
            <div className='flexBox2'>
                <button className='button1-medium'>Forgot password?</button>
                <button className='button1-medium'>Sign up</button>
            </div>
        </div>
    )
}

export default SignInBox