import React from 'react'

const Index = ({title, description}: {title: string, description: string}) => {
  return (
    <div className='max-w-[310px] h-[474px] bg-background-menu'>

        <img className='w-100' src="/landing-page-bussiness-startup.png" alt="" />
        <div className='p-10 flex flex-col gap-3'>
          <h4>
            {title}
          </h4>
          <p >
            {description}
          </p>

          <h4 className='text-[18px] text-primary'>
            Learn More {'>'}
          </h4>

        </div>

    </div>
  )
}

export default Index