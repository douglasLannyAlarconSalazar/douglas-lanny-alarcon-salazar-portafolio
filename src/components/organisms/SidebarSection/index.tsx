import Divider from '@/components/atoms/Divider'
import React, { ReactNode } from 'react'

const Index = ({ title, children }: { title?: string, children: ReactNode }) => {
    return (
        <div className='flex flex-col gap-5'>
            {title && <h4>{title}</h4>}
            <div className='flex flex-col gap-3'>
                {children}
            </div>
            <Divider />
        </div>
    )
}

export default Index