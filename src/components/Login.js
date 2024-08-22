import React, { useState } from 'react';
import { checkValidateEmailPassword } from '../utils/validate';
import Header from './Header';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSignIn, setIsSignIn] = useState(true);
    const [ name, setName ] = useState('');

    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    };

    const handleButtonClick = () => {
        const message = checkValidateEmailPassword(email, password);
        setError(message);
        if (message) return;
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name, photoURL: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                      }).then(() => {
                        // Profile updated!
                        // ...
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL
                        }))
                      }).catch((error) => {
                        // An error occurred
                        setError(error.message);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + '-' + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setError(errorCode + '-' + errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img className='h-screen w-screen object-cover' src='https://img.freepik.com/free-vector/futuristic-background-design_23-2148503793.jpg' alt='background' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute bg-sky-600 text-white w-[500px] h-[550px] right-0 left-0 p-12 my-36 mx-auto rounded-lg bg-opacity-85s'>
                <h1 className='font-bold text-3xl py-4'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignIn && 
                    (<input className='p-4 my-4 w-full bg-gray-700' type='text' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />)}
                <input className='p-4 my-4 w-full bg-gray-700' placeholder='Email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='p-4 my-4 w-full bg-gray-700' placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='text-red-900 font-bold'>* {error}</p>
                <button onClick={handleButtonClick} className='flex p-4 my-1 cursor-pointer bg-pink-600 w-full rounded-lg'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? 'New to Art Gallery? Sign Up Now' : 'Already Registerated? Sign In Now'}</p>
            </form>
        </div>
    )
}

export default Login;