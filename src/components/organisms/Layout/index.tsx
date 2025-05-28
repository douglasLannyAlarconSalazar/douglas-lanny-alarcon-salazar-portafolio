import React, { ReactNode } from 'react'

const Index = ({children}: {children: ReactNode}) => {
  return (
    <div className='flex justify-center'>
        {children}
    </div>
  )
}

export default Index