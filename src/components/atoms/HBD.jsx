import React from 'react';
import styled from 'styled-components';
import HBDimg from '../atoms/HBD LOVE.png';

const HBD = () => {
    const HBDimage = styled.img`
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    `;
    return ( 
        <>
        <HBDimage src={HBDimg} alt='HBD'/>
        </>
    );
}
 
export default HBD;