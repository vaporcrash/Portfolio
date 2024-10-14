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
        <p>Pronouns: He/Him</p>
        <p>Computer Science graduate</p>
        <p>Most Used Language: Python</p>
        <p>Favorite Framework: Flutter</p>
        <p>Languages known: English, Tamil</p>
        <p>Hobbies: Developing and playing video games, Badminton, Perfoming arts, Anime, Pokémon</p>
        </div>
        </Animator>
        <Animator animation={batch(MoveIn(0,700),Fade(0,1),Sticky(50,80))}>
      <p className='Landing-text'>Keep Scrolling!</p>
    </Animator>
    </ScrollPage>
}

export default About;