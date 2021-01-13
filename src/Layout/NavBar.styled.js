import styled from 'styled-components/macro'

export const NavBarContainer = styled.div`
    display:flex;
    height:80px;
    background-color:rgb(36, 41, 52);
    box-shadow:5px;
`;

export const LinkContainer = styled.div`
    float:left;
    padding:auto;
    margin:auto;
    margin-left:1rem;
a{
    text-decoration:none;
    display:inline-block;
    color:white;  
    margin-left:1rem;
    margin-right:1rem;
}
a:hover{
    cursor:pointer;
}
`;


export const MenuBar = styled.div`
    width: 35px;
    height: 5px;
    margin: 6px 0;
    transition: 0.4s;
    background-color:#333;

`;
export const MenuBarContainer = styled.div`
    cursor: pointer;
    
    ${MenuBar}:first-child{
        transform: ${props => props.transform ? 'rotate(-45deg) translate(-9px, 7px)' : '' };
        -webkit-transform: ${props => props.transform ? 'rotate(-45deg) translate(-9px, 7px)' : '' };
        background-color:${props => props.transform ? 'white' : '#333'};
    }

    ${MenuBar}:nth-last-child(2){
        opacity: ${props => props.transform ? '0' : ''};
    }

    ${MenuBar}:last-child{
        transform: ${props => props.transform ? 'rotate(45deg) translate(-8px, -7px)' : ''};
        -webkit-transform: ${props => props.transform ? 'rotate(45deg) translate(-8px, -7px)' : ''};
        background-color:${props => props.transform ? 'white' : '#333'};
    }
    :hover{
        ${MenuBar}{
            background-color:${props => props.transform ? '' : 'white'};
        }
    }
`;

// -webkit-transform:

// background-color: #333;
