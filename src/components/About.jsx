import React from 'react';
import {Animator,ScrollPage,Sticky,batch,MoveIn, Fade} from 'react-scroll-motion';

function About(){
    return <ScrollPage className='Black'>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(30,50))}>
            <div className='landing-div'>
                <p className='Project-title'>Sharvan Ram Kumaran</p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(700,0),Fade(0,1),Sticky(70,50))}>
        <div className='landing-div'>
        <p className='Landing-text'>Pronouns: He/Him</p>
        <p className='Landing-text'>Computer Science graduate</p>
        <p className='Landing-text'>Favorite Framework: Flutter</p>
        <p className='Landing-text'>Hobbies: Developing and playing video games, perfoming arts, Anime, Pokémon</p>
        </div>
        </Animator>
        <Animator animation={batch(MoveIn(0,700),Fade(0,1),Sticky(50,80))}>
      <p className='Landing-text'><a className='jumps' href='https://drive.google.com/file/d/1pcIKLGIqlPMCAhOQ1UDja0kqr1q6EHQF/view?usp=sharing' target='_blank' rel="noreferrer">Click here to see my resume!</a></p>
      <p className='Landing-text'>Keep Scrolling!</p>
    </Animator>
    </ScrollPage>
}

export default About;