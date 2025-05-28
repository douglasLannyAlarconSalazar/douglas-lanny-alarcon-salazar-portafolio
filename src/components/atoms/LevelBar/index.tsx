import React from 'react'

const Index = ({percentage}: {percentage: number}) => {
  return (

    <div className='border-[0.5px] rounded-full border-primary p-[2px] w-auto'>
        <div className='bg-primary h-[3px] rounded-full'  style={{ width: `${percentage}%` }} />
    </div>
  )
}

export default Index