import React from 'react'
import MainMenu from '../MainMenu'
import MainSection from '../MainSection'
import MyKnowledge from '../MyKnowledge'
import Education from '../Education'
import Portfolio from '../Portfolio'
import Footer from '../Footer'

const Index = () => {
  return (
    <div className='sm:max-w-[1040px] sm:px-10 flex flex-col gap-5 py-5 sm:py-0'>

      <MainMenu />

      <MainSection title='My Knowledge'
        description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
        <MyKnowledge />
      </MainSection>

      <MainSection title='Education'
        description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
        <Education />
      </MainSection>

      <MainSection title='Portfolio'
        description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
        <Portfolio />
      </MainSection>

      <Footer />

    </div>
  )
}

export default Index