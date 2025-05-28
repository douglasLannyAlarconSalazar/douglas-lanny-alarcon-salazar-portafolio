import React from 'react'
import BlogPost from '../BlogPost'

const Posts: {title: string, description: string}[] = [
  {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
   {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
  {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
   {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
  {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
   {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
  {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
   {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
  {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
   {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
  {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  },
   {
    title: 'How to make web tempates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna '
  }
];

const Index = () => {
  return (
    <div className='carousel' >
      <div className='carousel-track'>
        {
          Posts.map((p) =>
            <BlogPost title={p.title} description={p.description} />
          )
        }
      </div>
    </div>
  )
}

export default Index