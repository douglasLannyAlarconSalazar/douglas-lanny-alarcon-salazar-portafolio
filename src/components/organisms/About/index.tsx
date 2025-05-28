import InfoItem from '@/components/molecules/InfoItem'
import React from 'react'

const Index = ({ items }: { items: { name: string, value: string, highlight: boolean  }[] }) => {
  return (
    <>
      {
        items.map(
          (item) => <InfoItem key={item.name} title={item.name} data={item.value} highlight={item.highlight} />
        )
      }
    </>
  )
}

export default Index