import React, { ReactNode } from 'react'

const Index = ({children}: {children: ReactNode} ) => {
  return (
    <div className='size-[48px] flex items-center justify-center   bg-primary rounded-full'>
        {children}
    </div>
  )
}

export default Index