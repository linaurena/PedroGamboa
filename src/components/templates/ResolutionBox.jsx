import Section from '../atoms/Section';
import Normative from '../organisms/Normative';import React from 'react';
import A from '../atoms/A';

const ResolutionBox = () => {
    return ( 
        <React.Fragment>
            <Section>
                <Normative />
                <A>arquitectopedrogamboa@gmail.com</A>
            </Section>
        </React.Fragment>
    );
}
 
export default ResolutionBox;