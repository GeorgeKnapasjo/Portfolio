import React, { useEffect, useRef } from 'react';
import { BannerContainer, ContentContainer } from './Banner.styled';
import {gsap} from 'gsap';
import SplitType from 'split-type';
// import { SplitText } from 'gsap/all';



const Banner = () => {
    useEffect(()=>{
        var mySplitText = new SplitType("#name", {type:"words,chars"})
        let chars = mySplitText.chars; 
        console.log(chars)
        gsap.from(chars, {
            opacity: 0,
            x: 200,
            duration: 1,
            stagger: { amount: 1 },
          })
    })
    return(
        <BannerContainer>
            <ContentContainer id='name'>
                <h1>George Knapasjo</h1> <br/>
                <p>Software developer, with a love for front end web developement</p>
            </ContentContainer>
        </BannerContainer>
    )
}

export default Banner