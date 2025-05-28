import { DribbbleIcon, FaceBookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '@/components/atoms/Icons'
import SocialIcon from '@/components/atoms/SocialIcon'
import React from 'react'

const Index = () => {
    return (
        <div className='flex sm:flex-col gap-4'>
            <SocialIcon >
                <FaceBookIcon />
            </SocialIcon>

            <SocialIcon >
                <InstagramIcon />
            </SocialIcon>

            <SocialIcon >
                <TwitterIcon />
            </SocialIcon>

            <SocialIcon >
                <LinkedinIcon />
            </SocialIcon>

            <SocialIcon >
                <YoutubeIcon />
            </SocialIcon>

            <SocialIcon >
                <DribbbleIcon />
            </SocialIcon>

        </div>
    )
}

export default Index