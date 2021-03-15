import React from 'react';
import WhatsAppIcon from '../atoms/w-icon.png';
import styled from 'styled-components';

const Whatsapp = () => {
    styled.img`
    height: 40px;
`;
    return ( 
        <>
        <a href='https://wa.me/+573006606367'><img src={WhatsAppIcon} alt='WhatsApp'/></a>
        </>
    );
}
 
export default Whatsapp;