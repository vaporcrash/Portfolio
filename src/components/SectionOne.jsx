import React from 'react';
import {Animator,ScrollPage,Sticky,batch,FadeIn,MoveIn} from 'react-scroll-motion';
import myGif from '../assets/BEEELearner.gif';
import { SocialIcon } from 'react-social-icons';

function SectionOne(){
    return <ScrollPage id='SectionOne' className='Mid-Section Even'>
    <Animator animation={batch(MoveIn(800,0),FadeIn(0,1),Sticky(75,45))}>
      <p className='Project-title'> BEEE Learner</p>
      <p>An interactive Flutter application to provide course content for the subject Basic Electrical,
Electronics and Measurement Engineering, including 20+ chapters of content, and a Mesh Analysis Solver</p>
      <p><SocialIcon url='https://github.com/vaporcrash/BEEE_App' target='_blank' /> <a href='https://github.com/vaporcrash/BEEE_App' target='_blank' rel="noreferrer">- Link to repository</a></p>
    </Animator>
    <Animator  animation={batch(MoveIn(-2500,0),Sticky(43,50))}>
      <img src={myGif} alt=""/>
    </Animator>
    <Animator animation={batch(MoveIn(0,4000),FadeIn(0,1),Sticky(10,11))}>
      <div id='BEEE-Side'>
        <p>Coded using Dart</p>
        <p>Led to publication of <a href='https://drive.google.com/file/d/1FEYMOTDSm19_7g8qaJgIRtBJIbYmMrow/view?usp=sharing' target='_blank' rel="noreferrer">research paper</a> titled “Electric Circuit Analysis - App Based Learning” at ICPEDC-2021</p>
      </div>
    </Animator>
  </ScrollPage>
}

export default SectionOne;