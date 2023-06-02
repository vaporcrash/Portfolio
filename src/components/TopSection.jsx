import React from 'react';
import {ScrollPage,Animator, Sticky } from 'react-scroll-motion';


function TopSection({secOne}){
  
    return <ScrollPage>
    <div className='Top-section'>
    <Animator animation={Sticky(50,20)}>
      <p className='Landing-text'>Hey! It's nice to meet you!</p>
      <p className='Landing-text'>I'm Sharvan, a Fullstack developer with a passion for neat design and clean code.</p>
    </Animator>
    <Animator animation={Sticky()}>
      <div className='landing-div'>
      <p className='Landing-text about-me'>About Me:</p>
      <p className='Landing-text'>Pronouns: He/Him</p>
      <p className='Landing-text'>Computer Science graduate</p>
      <p className='Landing-text'>Favorite Framework: Flutter</p>
      <p className='Landing-text'>Hobbies: Developing and playing video games, perfoming arts, Anime, Pokémon</p>
      </div>
      </Animator>
    <Animator animation={Sticky(50,80)}>
      <p className='Landing-text'><a className=' jumps' href='https://drive.google.com/file/d/1lRUKnSCm3D01jIfp-WJsNT8nKGpwYQrH/view?usp=sharing' target='_blank' rel="noreferrer">Click here to see my resume!</a></p>
    </Animator>
    
    <Animator animation={Sticky(50,90)}>
      <p id='scrollmsg' className='Landing-text'>Scroll to see my projects</p>
    </Animator>
    </div>
    
  </ScrollPage>
}

export default TopSection;