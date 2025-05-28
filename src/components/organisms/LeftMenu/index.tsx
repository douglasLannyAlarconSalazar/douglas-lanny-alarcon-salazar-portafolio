import React from 'react'
import Profile from '../Profile'
import About from '../About'
import Languajes from '../Languajes'
import ExtraSkills from '../ExtraSkills'
import SidebarSection from '../SidebarSection'

const Index = () => {

  const AboutItems: { name: string, value: string, highlight: boolean }[] = [
    { name: 'Age', value: '45', highlight: false },
    { name: 'Residence', value: 'BD', highlight: false },
    { name: 'Freelance', value: 'Available', highlight: true },
    { name: 'Address', value: 'Dhaka,Bangladesh', highlight: false },
  ];

  const LenguageItems: { name: string, data: number }[] = [
    { name: 'Bangla', data: 100 },
    { name: 'English', data: 80 },
    { name: 'Spanish', data: 60 },
  ];

  const ProgrammingLenguageItems: { name: string, data: number }[] = [
    { name: 'Html', data: 90 },
    { name: 'CSS', data: 85 },
    { name: 'Js', data: 80 },
    { name: 'PHP', data: 75 },
    { name: 'WordPress', data: 85 },
  ];

  const Skills = [
    'Bootstrap, Materialize',
    'Stylus, Sass, Less',
    'Gulp, Webpack, Grunt',
    'GIT Knowledge'
  ];

  return (
    <div className='sm:w-[305px] bg-background-menu'>
      <div className=" sm:sticky sm:top-0 flex flex-col  gap-10 p-10">

        <Profile />

        <SidebarSection >
          <About items={AboutItems} />
        </SidebarSection>

        <SidebarSection title='Languages' >
          <Languajes items={LenguageItems} />
        </SidebarSection>

        <SidebarSection title='Programming Languages' >
          <Languajes items={ProgrammingLenguageItems} />
        </SidebarSection>

        <SidebarSection title='Extra Skills'>
          <ExtraSkills items={Skills} />
        </SidebarSection>
      </div>
    </div>

  )
}

export default Index