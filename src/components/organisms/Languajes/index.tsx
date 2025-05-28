import Languaje from '@/components/molecules/Languaje'
import React from 'react'

const Index = ({ items }: { items: { name: string, data: number }[] }) => {
  return (
    <>
      {
        items.map(
         item  => <Languaje key={item.name} name={item.name} data={item.data} />
        )
      }
    </>
  )
}

export default Index