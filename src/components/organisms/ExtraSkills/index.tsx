

import React from 'react'
import { SkillIcon } from '@/components/atoms/Icons'

const Index = ({items} : {items: string[]}) => {
  return (
      <>
        {
          items.map((item, i) =>
            <div key={i} className='flex gap-3'>
              <SkillIcon />
              <p>
                {
                  item
                }
              </p>
            </div>
          )
        }
      </> 
  )
}

export default Index