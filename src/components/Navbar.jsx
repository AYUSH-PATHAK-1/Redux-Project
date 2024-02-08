import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
      <div className='m-1 border-[1px] border-black rounded-lg'>
        <div className='px-5'>
        <div className=' justify-between flex'>
        <div className='logo p-2'>
          <h1 className='text-xl font-bold'>Redux</h1>
        </div>
        <div className='menu p-2'>
          <ul className='gap-9 flex text-blue-600 font-bold'>
            <li className='hover:text-black duration-500 hover:duration-500 cursor-pointer'>Home</li>
            <li className='hover:text-black duration-500 hover:duration-500 cursor-pointer'>Contact</li>
            <li className='hover:text-black duration-500 hover:duration-500 cursor-pointer'>About</li>
            <li className='hover:text-black duration-500 hover:duration-500 cursor-pointer'>Privacy</li>
          </ul>
        </div>
        </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar