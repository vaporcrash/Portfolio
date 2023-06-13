import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';



function Footer(){
    return <footer className='Landing-text' style={{textAlign:'center'}}>
        <SocialIcon url='https://www.linkedin.com/in/sharvan-kumaran/' target='_blank'/> <SocialIcon url='https://github.com/vaporcrash' bgColor='gray' target='_blank'/> <SocialIcon url='https://open.spotify.com/user/22yr72sc5gczjie2dvves53ji?si=gCEPKSsrSMiQ_vtAVgZ49A' target='_blank' /><p ><a className='jumps' href="https://drive.google.com/file/d/1pcIKLGIqlPMCAhOQ1UDja0kqr1q6EHQF/view?usp=sharing" target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} size="xl" />-Resume</a></p>
    </footer>
}

export default Footer;