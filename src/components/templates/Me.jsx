import React from 'react';
import H1 from '../atoms/H1';
import A from '../atoms/A';
import Experience from '../organisms/Experience';
import Header from '../atoms/Header';
import ResumeMe from '../organisms/ResumeMe';
import Article from '../atoms/Article';
import HBD from '../atoms/HBD';

const Me = () => {
    return ( 
        <React.Fragment>
            <Header>
                <H1>Pedro Gamboa</H1>
                <Article>
                    <A>arquitectopedrogamboa@gmail.com</A>
                    <Experience />
                    <ResumeMe />
                </Article>
            </Header>
            
        </React.Fragment>
    );
}
 
export default Me;