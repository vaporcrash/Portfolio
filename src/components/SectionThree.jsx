import React from 'react';
import {Animator,ScrollPage,Sticky,batch,MoveIn, Fade} from 'react-scroll-motion';



function SectionThree(){
    return <ScrollPage>
        <Animator animation={batch(MoveIn(0,-100),Fade(0,1),Sticky(50,10))}>
            <p id='SkillPageTitle'>Skills</p>
        </Animator>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(30,20))}>
            <p className='Skills-title'>Certifications</p>
            <p>AWS Certified Solutions Architect - Associate</p>
        </Animator>
        <Animator animation={batch(MoveIn(700,0),Fade(0,1),Sticky(60,35))}>
            <p className='Skills-title'>Languages</p>
            <p className='Skills'> Python | Dart | C# | C | Java | HTML | CSS | Javascript | C++ | Motoko | Solidity | PL/SQL</p>
        </Animator>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(30,50))}>
            <p className='Skills-title'>Tools</p>
            <p className='Skills'>Unity | Android Studio | Git | PyCharm | Mongo Compass | Atlassian Suite</p>
        </Animator>
        <Animator animation={batch(MoveIn(700,0),Fade(0,1),Sticky(60,65))}>
            <p className='Skills-title'>Frameworks</p>
            <p className='Skills'>Vue.js | Node.js | AWS | React.js | React-Native | Flutter | Express.js | Bootstrap | Flask | GCP</p>
        </Animator>
        <Animator animation={batch(MoveIn(-700,0),Fade(0,1),Sticky(30,80))}>
            <p className='Skills-title'>Libraries</p>
            <p className='Skills'>PyTorch | Pandas | Seaborn | DGL</p>
        </Animator>
    </ScrollPage>
}

export default SectionThree;