import EducationCard from '@/components/molecules/EducationCard';
import React from 'react'

const Education: { institute: string, date: string, description: string }[] = [
  {
    institute: 'University of Toronto',
    date: 'Jan 1016 - Dec 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
  },
  {
    institute: 'Programming Course',
    date: 'Jan 1016 - Dec 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
  },
  {
    institute: 'Web developer courses',
    date: 'Jan 1016 - Dec 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.'
  },

];

const Index = () => {
  return (
    <div className='px-10 pt-10  flex flex-col gap-5 bg-background-menu'>
      {
        Education.map( (e,i) => <EducationCard key={i} institute = {e.institute} date={e.date} description={e.description} /> )
      }
    </div>
  )
}

export default Index