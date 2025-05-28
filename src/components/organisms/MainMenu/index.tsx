import Button from '@/components/atoms/Button';
import React from 'react';

const Index = () => {
  return (
    <div className=' sm:relative p-10 px-10 bg-background-menu flex flex-col sm:flex-row justify-between sm:h-[400px]'>

      <div className='flex flex-col sm:items-start gap-10'>

        <div className='flex flex-col gap-5'>
          <h1 className='sm:w-[500px]'>
            I'm Douglas Alarcón <span className='text-primary'>Front-end Developer</span>
          </h1>

          <p className='sm:w-[424px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
            feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.
          </p>
          
        </div>

        <Button />
      </div>

      <div className='hidden sm:block sm:absolute pt-[3px] bottom-0 right-10 h-full'>
        <img src="/photo.png" alt="" className="h-full object-cover" />
      </div>

    </div>
  );
};

export default Index;
