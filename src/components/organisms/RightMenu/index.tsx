import React from 'react'
import Social from '../Social'

const Index = () => {
  return (

    <div className='bg-background-menu'>
      <div className="sm:min-w-[95px] sm:sticky sm:top-0 py-5 sm:pt-15 px-5 flex flex-col items-center gap-5">

        <h4 className='font-black'>
          Links
        </h4>

        <Social />

      </div>
    </div>

  )
}

export default Index