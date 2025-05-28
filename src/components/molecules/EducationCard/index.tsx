import Divider from '@/components/atoms/Divider'
import React from 'react'

const Index = ({ institute, date, description }: { institute: string, date: string, description: string }) => {
    return (

        <div className='flex flex-col gap-5'>
            <div className='flex flex-col sm:flex-row sm:justify-between gap-5'>
                <div className='flex flex-col gap-5 justify-start'>
                    <h4>
                        {institute}
                    </h4>

                    <div className='flex flex-wrap min-w-[100px]  gap-5'>
                        <p>Student</p>
                        <div className="flex flex-col px-1 justify-center bg-primary text-background-menu  text-[10px] rounded-[1px] ">
                            {date}
                        </div>
                    </div>
                </div>

                <div className='sm:max-w-[536px] flex flex-col gap-5 justify-start'>
                    <h4>
                        Certificate of web training
                    </h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <Divider />
        </div>

    )
}

export default Index