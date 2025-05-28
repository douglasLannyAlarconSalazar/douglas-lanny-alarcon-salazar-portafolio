import React, { ReactNode } from 'react'

const Index = ({title, description, children}: {title: string, description: string, children: ReactNode}) => {
  return (
    <div className='flex flex-col gap-10 px-10 sm:px-0'>

        <div className='flex flex-col items-center gap-5'>
          <h2>
            {title}
          </h2>
          <p className='sm:max-w-[438px] text-center'>
            {description}
          </p>
        </div>
        <>
          {children}
        </>
    </div>
  )
}

export default Index