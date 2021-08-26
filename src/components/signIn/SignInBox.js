import React from 'react'

const SignInBox = ({ handleChange, handleSignIn, email, password }) => {
    return (
        <div id='signIn'>
            <header>
                <h3>SignIn</h3>
            </header>
            <form>
                <input className='inputBox1' id='email' type='email' value={email} onChange={handleChange} placeholder='email*' autoComplete='username' required />
                <input className='inputBox1' id='password' type='password' value={password} onChange={handleChange} placeholder='password*' autoComplete='current-password' required />
                <button className='button3' onClick={handleSignIn} type='button'>Sign in</button>
            </form>
            <div className='flexBox2'>
                <button className='button1-medium'>Forgot password?</button>
                <button className='button1-medium'>Sign up</button>
            </div>
        </div>
    )
}

export default SignInBox