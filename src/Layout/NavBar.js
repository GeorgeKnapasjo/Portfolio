import React, {useRef, useEffect, useState} from 'react';
import { LinkContainer, MenuBar, MenuBarContainer, NavBarContainer } from './NavBar.styled';
import {gsap} from 'gsap';


const NavBar = (props) => {
    let linkOne = useRef(null);
    let linkTwo = useRef(null);
    let linkThree = useRef(null);
    let linkFour = useRef(null);
    const distance = 200;
    let fadeDirection = {x: -distance};

    useEffect(() => {
      gsap.from(linkOne.current, 0.75, {
        ...fadeDirection,
        opacity: 0,
        delay:1.2
      });
      gsap.from(linkTwo.current, 0.75, {
        ...fadeDirection,
        opacity: 0,
        delay:1.7
      });
      gsap.from(linkThree.current, 0.75, {
        ...fadeDirection,
        opacity: 0,
        delay:2.2
      });
      gsap.from(linkFour.current, 0.75, {
        ...fadeDirection,
        opacity: 0,
        delay:2.7
      });
    }, []);

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener('resize', ()=>setWidth(window.innerWidth));
    })

    const [menuClicked, setMenuClicked] = useState(false);

    const menuHandler = () => {
        menuClicked ? setMenuClicked(false) : setMenuClicked(true);
    }

    return(
        <NavBarContainer>

            <LinkContainer style={{display: width > 500 ? 'block' : 'none'}}>
                <a onClick={()=>props.handleClick('AboutMe')} ref={linkOne}>About</a>
                <a ref={linkTwo}>Skills/experience</a>
                <a ref={linkThree}>Projects</a>
                <a ref={linkFour}>Hobbies/interests</a>
            </LinkContainer>
            
            <LinkContainer style={{display: width <= 500 ? 'block' : 'none'}}>
            <MenuBarContainer transform={menuClicked} onClick={menuHandler}>
                <MenuBar transform={menuClicked} onClick={menuHandler}/>
                <MenuBar transform={menuClicked} onClick={menuHandler}/>
                <MenuBar transform={menuClicked} onClick={menuHandler}/>
            </MenuBarContainer>
            </LinkContainer>
        </NavBarContainer>
    );
}

export default NavBar