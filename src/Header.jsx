import React from 'react'
import Background from './assets/bg-header.svg'

const Header = () => {
  return (
    <div 
    className='w-full h-32 bg-no-repeat bg-cover bg-[#64BABB]'
    style={{backgroundImage: `url(${Background})`}}
     ></div>
  )
}

export default Header;