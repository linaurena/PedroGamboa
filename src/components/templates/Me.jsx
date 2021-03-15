import React from 'react';
import H1 from '../atoms/H1';
import Experience from '../organisms/Experience';
import Header from '../atoms/Header';
import Article from '../atoms/Article';
import Activity from '../organisms/Activity';
import H2 from '../atoms/H2';

const Me = () => {
    return ( 
        <React.Fragment>
            <Header>
                <H1>Pedro Gamboa</H1>
                <H2>Arquitectos</H2>
                <br />
                <Activity></Activity>
                <Article>
                    <Experience />
                </Article>
            </Header>
        </React.Fragment>
    );
}
 
export default Me;