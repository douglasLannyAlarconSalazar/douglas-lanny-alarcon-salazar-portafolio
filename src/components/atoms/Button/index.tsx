import React from 'react'
import { ArrowIcon } from '../Icons'

const Index = () => {
  return (
    <button className='w-auto px-[32px] py-[16px] rounded-[3px] bg-primary flex items-center gap-3'>
        <span className='text-[16px] text-foreground font-semibold'>
            HIRE ME
        </span>
        <ArrowIcon />
    </button>
    )
}

export default Index