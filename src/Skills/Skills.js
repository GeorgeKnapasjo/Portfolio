import React from 'react';
import { SkillsContainer, SkillsWrapper, SkillAreaContainer, Card } from './Skills.styled';



const Skills = () => {
    return (
        <>
            <SkillsWrapper>
                <SkillsContainer>
                    <h1>Languages I speak/Technologies I use</h1>
                <br/>
                <SkillAreaContainer>
                    <h2>Front-end</h2>
                    <Card>
                        <img/>
                        <h4>Javascript</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>React</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>HTML</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>CSS</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Markdown</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Jest/enzyme</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Styled Components</h4>
                    </Card>
                </SkillAreaContainer>
                <SkillAreaContainer>
                    <h2>Back-end</h2>
                    <Card>
                        <img/>
                        <h4>Java</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Kotlin</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Spring</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>MongoDB</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>SQL</h4>
                    </Card>
                </SkillAreaContainer>
                <SkillAreaContainer>
                    <h2>General</h2>
                    <Card>
                        <img/>
                        <h4>Git</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Linux command line</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Extreme programming</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Pair programming</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>Agile methodology</h4>
                    </Card>
                    <Card>
                        <img/>
                        <h4>TDD</h4>
                    </Card>
                </SkillAreaContainer>
                </SkillsContainer>
            </SkillsWrapper>
        </>
    );
};

export default Skills;