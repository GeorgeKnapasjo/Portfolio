import styled from 'styled-components/macro';

export const SkillsWrapper = styled.div`
    display:flex;
    color:white;
    background-color:rgb(36, 41, 52);
    justify-content:space-around;
    align-items:center;
    margin:auto;
    padding:auto;
    padding-top:10rem;
`;

export const SkillsContainer = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    h1{
        padding-left:2rem;
    }
`;

export const SkillAreaContainer = styled.div`
    display:flex;
    border: 1px solid #eaedf4;
    padding:1rem;
    margin:2rem;
    width:1140px;
    box-shadow:10px;
`;

export const Card = styled.div`
    padding:1rem;
    h4{
        text-align:center;
    }
    img{
        width:100px;
        height:100px;
    }
`;
