import React from 'react'
import {Button} from "@/components/ui/button"

const Header = () => {
  return (
    <>
    <div className='Absolute fixed z-10 top-0 w-full flex justify-between items-center p-3 px-5 bg-gray-200'>
        <h1 className='text-5xl'><span className='font-extrabold text-red-500'>Trip</span><span className=' font-extralight'>Mate</span></h1>
        <Button>Sign In</Button>
    </div>
    </>
  )
}

export default Header