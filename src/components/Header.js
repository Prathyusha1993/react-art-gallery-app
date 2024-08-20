import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-100 flex justify-between'>
        {/* <div> */}
            <img className='w-24' src={'https://img.freepik.com/premium-vector/art-gallery-logo-design_92167-616.jpg'} alt='logo' />
        {/* </div> */}
        {/* <div className='flex justify-between p-2'> */}
            <ul className='flex items-center p-4'>
                <li className='m-4'>Home</li>
                <li className='m-4'>About</li>
                <li className='m-4'>Shop</li>
                <li className='m-4'>Exhibitions</li>
                <li className='m-4'>Events</li>
                <img className='w-16 object-cover'  src={'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png'} alt='user' />
            <button>Sign Out</button>
            </ul>
            
        </div>
    // </div>
  )
}

export default Header;