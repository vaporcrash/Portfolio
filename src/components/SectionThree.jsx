import React from 'react';
import {Animator,ScrollPage,Sticky,batch,MoveIn, Fade} from 'react-scroll-motion';



function SectionThree(){
    return <ScrollPage className='Even'>
        <Animator animation={batch(MoveIn(0,-100),Fade(0,1),Sticky(50,10))}>
            <p id='SkillPageTitle'>Skills</p>
        </Animator>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(70,30))}>
            <div className='Web3-text'>
            <p className='Skills-title'>Certifications</p>
            <p>AWS Certified Solutions Architect - Associate</p>
            <p>Google Cloud Certified Associate Cloud Engineer</p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(700,0),Fade(0,1),Sticky(30,45))}>
            <div className='Web3-text'>
            <p className='Skills-title'>Languages</p>
            <p className='Skills'> Python | Dart | C# | C | Java | HTML | CSS | Javascript | C++ | Motoko | Solidity | PL/SQL</p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(70,60))}>
            <div className='Web3-text'>
            <p className='Skills-title'>Tools</p>
            <p className='Skills'>Unity | Android Studio | Git | PyCharm | Mongo Compass | Atlassian Suite</p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(700,0),Fade(0,1),Sticky(30,75))}>
            <div className='Web3-text'>
            <p className='Skills-title'>Frameworks</p>
            <p className='Skills'>Vue.js | Node.js | AWS | React.js | React-Native | Flutter | Express.js | Bootstrap | Flask | GCP</p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(70,90))}>
            <div className='Web3-text'>
            <p className='Skills-title'>Libraries</p>
            <p className='Skills'>PyTorch | Pandas | Seaborn | DGL</p>
            </div>
        </Animator>
    </ScrollPage>
}

export default SectionThree;