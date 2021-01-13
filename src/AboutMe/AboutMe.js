import React, {useEffect} from 'react';
import { AboutMeWrapper, ContentContainer, ContentTitle } from './AboutMe.styled';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const AboutMe = () => {
    useEffect(() => {
        // gsap.to('.AboutMeWrapper', {
        //     duration: 1,
        //     opacity: 1,
        //     ease: 'ease-in',
        //     backgroundColor:'transparent',
        //     scrollTrigger:{
        //         trigger:'.AboutMeWrapper',
        //         start:'top',
        //         bottom:'bottom 60%',
        //         markers:true,
        //     }
        // })
        gsap.from('.title', {
            duration: 1,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger:'.title',
                start:'top 80%',
                bottom:'bottom 60%',
            }
        })
        gsap.from('.content-line-1', {
            duration: 1,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger:'.content-line-1',
                start:'top 85%',
                bottom:'bottom 60%',
            }
        })
        gsap.from('.content-line-2', {
            duration: 1,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger:'.content-line-2',
                start:'top 85%',
                bottom:'bottom 60%',
            }
        })
        gsap.from('.content-line-3', {
            duration: 1,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger:'.content-line-3',
                start:'top 85%',
                bottom:'bottom 60%',
            }
        })
        gsap.from('.content-line-4', {
            duration: 1,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger:'.content-line-4',
                start:'top 85%',
                bottom:'bottom 60%',
            }
        })
        gsap.from('.content-line-5', {
            duration: 1,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger:'.content-line-5',
                start:'top 85%',
                bottom:'bottom 60%',
            }
        })
        gsap.from('.content-line-6', {
            duration: 1,
            y: '100',
            opacity: 0,
            ease: 'ease-in',
            scrollTrigger:{
                trigger:'.content-line-6',
                start:'top 85%',
                bottom:'bottom 60%',
            }
        })
      });
    return (
        <AboutMeWrapper id='AboutMe' className='AboutMeWrapper'>
        <ContentTitle className='title'>
            About Me
        </ContentTitle>

        <ContentContainer>
            <p className='content-line-1'>My name is George Knapasjo, I am 22 years old and I'm a software developer. </p>
            <p className='content-line-2'>In May of 2020 I completed an intensive 35+ hour per week software bootcamp, where I learnt Javascript, HTML, CSS and React.</p>
            <p className='content-line-3'> Since May, I have been working as a software developer at Service NSW where I have fallen in love with my career.</p>
            <p className='content-line-4'>Through working at Service NSW I have had exposure to back-end tasks, working with languages and frameworks such as Java, Kotlin, Spring, SQL, however,</p>
            <p className='content-line-5'>most of my time has been spend honing my front-end skills where I have grown a love for React.</p>
            <p className='content-line-6'>Whilst I feel comfortable with server-side work, my strengths come on the front-end.</p>
        </ContentContainer>
        </AboutMeWrapper>
    )
};

export default AboutMe;