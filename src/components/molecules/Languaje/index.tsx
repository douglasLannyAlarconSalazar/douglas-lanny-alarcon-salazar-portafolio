import LevelBar from '@/components/atoms/LevelBar';
import React from 'react'

const Index = ({ name, data }: { name: string, data: number }) => {
  return (
    <div className='flex flex-col gap-1'>
      <dl className='flex justify-between'>
        <dt className='text-text-secondary'>{name}:</dt>
        <dd className='text-text-secondary'>{data}%</dd>
      </dl>
      <LevelBar percentage={data} />
    </div>

  )
}

export default Index;