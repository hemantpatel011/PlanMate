import React from 'react'
import {Button} from "@/components/ui/button"

const Header = () => {
  return (
    <>
    <div className='flex justify-between items-center shadow-sm p-3 px-5'>
        <h1 className='text-5xl'><span className='text-black font-extrabold text-red-600'>Trip</span><span className=' font-extralight'>Mate</span></h1>
        <Button>Sign In</Button>
    </div>
    </>
  )
}

export default Header