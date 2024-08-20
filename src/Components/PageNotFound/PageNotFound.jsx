import React from 'react'
import pageImage from '../../assets/images/pagenotfound.svg'
export default function PageNotFound() {
  return (
    <>
    <div className='md:mt-28'>
        <h1 className='text-green-700 text-2xl font-semibold py-4'>Sorry this page not found</h1>
    <div className='w-1/4 mx-auto'>
    <img src={pageImage} alt="" className='w-full' />
    </div>
    </div>
    </>
  )
}
