import React from 'react';
import Me from '../templates/Me';
import ContactSection from '../templates/ContactSection';
import ResolutionBox from '../templates/ResolutionBox';

const Main = () => {
    return ( 
        <React.Fragment>
            <Me />
            <ResolutionBox />
            <ContactSection></ContactSection>
        </React.Fragment>
    );
}
 
export default Main;