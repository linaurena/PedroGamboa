import React from 'react';
import HBD from '../atoms/HBD';
import Me from '../templates/Me';

const Main = () => {
    return ( 
        <React.Fragment>
            <Me />
            <HBD />
        </React.Fragment>
    );
}
 
export default Main;