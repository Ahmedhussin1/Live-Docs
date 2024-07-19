import Link  from 'next/link'
import Image from 'next/image'
import React from 'react'
import logoWithName from '../public/assets/icons/logo.svg'
import logoWithoutName from '../public/assets/icons/logo-icon.svg'
const Header = ({children}:HeaderProps) => {
  return (
    <div className='header'>
        <Link href='/' className='md:flex-1'>
            <Image 
                src={logoWithName}
                alt='Logo with name'
                width={120}
                height={32}
                className='hidden md:block'
        />
            <Image 
                src={logoWithoutName}
                alt='Logo without name'
                width={32}
                height={32}
                className='mr-2 md:hidden'
                />
            </Link>
        {children}
    </div>
  )
}

export default Header