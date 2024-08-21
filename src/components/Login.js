import React, {useState} from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  return (
    <div>
        <div className='absolute'>
            <img className='h-screen w-screen object-cover' src='https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg' alt='background' />
        </div>
        <form className='absolute bg-sky-600 text-white w-[500px] h-[500px] right-0 left-0 p-12 my-36 mx-auto rounded-lg bg-opacity-85s'>
            <input className='p-4 my-4 w-full bg-gray-700' placeholder='Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className='p-4 my-4 w-full bg-gray-700' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='flex p-4 my-4 cursor-pointer bg-orange-700 w-full rounded-lg'>Login</button>
        </form>
    </div>
  )
}

export default Login;