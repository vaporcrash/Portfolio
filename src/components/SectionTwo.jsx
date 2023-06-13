import React from 'react';
import {Animator,ScrollPage,Sticky,batch,MoveIn, Fade} from 'react-scroll-motion';
import { SocialIcon } from 'react-social-icons';

function SectionTwo(){
    return <ScrollPage className='Mid-Section Black'>
        <Animator animation={batch(MoveIn(-1500,0),Fade(0,1),Sticky(25,53))}>
           
            <div className='Web3-text'> 
                <p className='Project-title'>Web3 Health Insurance</p>
                <p>- Smart contracts to create, redeem and prioritize insurance contracts</p>
                <p>- Achieved average query time of 1 second on Internet Computer Blockchain, nearly 90% improvement from
Ethereum Blockchain</p>
                <p>- Coded on both Internet Computer and Ethereum Blockchains</p>
                
           
            <p><SocialIcon url='https://github.com/AvinashKartik/Health-Insurance-Using-Canisters' target='_blank' bgColor='white'/> <a className='jumps' href='https://github.com/AvinashKartik/Health-Insurance-Using-Canisters' target='_blank' rel="noreferrer">- Link to repository</a></p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(1500,0),Fade(0,1),Sticky(70,25))} >
            
            <div className='Web3-text'>
                <p className='Project-title'>Yoyo Hotels</p>
                <p>- Highly responsive web application for hotel owners and tourists to post and peruse a dynamic directory of
hotels</p>
                <p>- Coded using Node.js, Mongoose and Bootstrap</p>
                <p><SocialIcon url='https://github.com/vaporcrash/Yoyo' target='_blank' bgColor='white'/> <a className='jumps' href='https://github.com/vaporcrash/Yoyo' target='_blank' rel="noreferrer">- Link to repository</a></p>
            </div>
        </Animator>
        <Animator animation={batch(MoveIn(1500,0),Fade(0,1),Sticky(70,75))}>
            <div className='Web3-text'>
                <p className='Project-title'>Faux-La</p>
                <p>- Simplified version of Ola, popular ridesharing application, coded in Java, implemented with Inheritance and Polymorphism</p>
                <p>- Complete with 3 databases for drivers, customers and managers</p>
                <p><SocialIcon url='https://github.com/vaporcrash/Faux-La' target='_blank' bgColor='white'/> <a className='jumps' href='https://github.com/vaporcrash/Faux-La' target='_blank' rel="noreferrer">- Link to repository</a></p>
            </div>
        </Animator>
    </ScrollPage>
}

export default SectionTwo;