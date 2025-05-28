import Divider from '@/components/atoms/Divider'
import Avatar from '@/components/molecules/Avatar'
import React from 'react'

const Index = () => {
  return (
    // <div className="flex flex-col gap-10">
    <div className='flex flex-col gap-15'>
      <div className='flex flex-col items-center  gap-10'>
        <Avatar />
        <div className='flex flex-col items-center gap-5'>
          <h4>
            Douglas Alarcón Salazar
          </h4>
          <p>
            Font-end Developer
          </p>
        </div>
      </div>
      <Divider />
    </div>
  )
}

export default Index