import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser(
                    {
                        uid: uid,
                        emial: email,
                        displayName: displayName,
                        photoURL: photoURL
                    }
                ));
                navigate('/');
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/login');
            }
        });
        return () => { unsubscribe(); };
    }, []);

    return (
        <div className=' px-2 py-2 bg-gradient-to-r from-black flex justify-between'>
            {/* <div> */}
            <img className='w-24' src={'https://img.freepik.com/premium-vector/art-gallery-logo-design_92167-616.jpg'} alt='logo' />
            {/* </div> */}
            {/* <div className='flex justify-between p-2'> */}
            {user && (
                <ul className='flex items-center p-4'>
                    <Link to='/'><li className='m-4'>Home</li></Link>
                    <Link to='/about'><li className='m-4'>About</li></Link>
                    <Link to='/shop'><li className='m-4'>Shop</li></Link>
                    <Link to='/exhibitions'><li className='m-4'>Exhibitions</li></Link>
                    <Link to='/events'><li className='m-4'>Events</li></Link>
                    <img className='w-16 object-cover' src={'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'} alt='user' />
                    <button onClick={handleSignout}>Sign Out</button>
                </ul>
            )}
        </div>
        // </div>
    )
}

export default Header;