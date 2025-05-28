import { CodingIcon, GameDevelopmentICon, IlustrationIcon, MicrophoneIcon, PhotographerICon } from '@/components/atoms/Icons'
import KnowledgeCard from '@/components/molecules/KnowledgeCard'
import React from 'react'

const Index = () => {
  return (
    <div className='flex flex-wrap justify-center gap-5'>

      <KnowledgeCard
        title='web development'
        description='web development' >
        <CodingIcon />
      </KnowledgeCard>

      <KnowledgeCard
        title='uI/uX design'
        description='Mobile app, website design' >
        <IlustrationIcon />
      </KnowledgeCard>



      <KnowledgeCard
        title='sound design'
        description='Voice Over, Beat Making' >

        <MicrophoneIcon />

      </KnowledgeCard>

      <KnowledgeCard
        title='game design'
        description='Character Design, Props & Objects' >

        <GameDevelopmentICon />

      </KnowledgeCard>

      <KnowledgeCard
        title='photography'
        description='portrait, product photography' >

        <PhotographerICon />

      </KnowledgeCard>

      <KnowledgeCard
        title='advertising'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. ' />

    </div>
  )
}

export default Index