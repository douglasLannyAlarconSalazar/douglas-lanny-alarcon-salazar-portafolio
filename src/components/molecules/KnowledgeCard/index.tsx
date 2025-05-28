import React, { ReactNode } from 'react'

const Index = ({ title, description, children }: { title: string, description: string, children?: ReactNode }) => {
    return (
        <div className='bg-background-menu min-w-[300px] h-[225px] p-5 flex flex-col items-center justify-center gap-4'>

            {children &&
                <>
                    {children}
                </>}
            
            <h4>
                {title}
            </h4>

            <p className='w-[260px] text-center'>
                {description}
            </p>

        </div>
    )
}

export default Index