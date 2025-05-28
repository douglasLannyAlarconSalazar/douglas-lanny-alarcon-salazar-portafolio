
import React from 'react'

const Index = ({title, data, highlight}: {title: string, data: string,  highlight: boolean}) => {
  return (
    <dl className='flex justify-between'>
        <dt className='text-foreground'>{title}:</dt>
        <dd className={`text-foreground ${highlight ? 'text-status-available' : ''}`}>{data}</dd>
    </dl>
  )
}

export default Index