import './About.css';
import React from 'react';
import profile from '../About/channel-1.jpeg';
import profile2  from '../About/channel-3.jpeg';
// import {ScrollMenu, visibilityContext} from 'react-horizontal--scrolling-menu';

import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
const About = () => {
  const [count, setCount] = React.useState(0);
  function add(){
    setCount(count+1);
  }
  function minus(){
    setCount(count-1);
  }
  return ( 
  <div className='about-div'>
       <div className='Grid'>
       <div className="Header">
        <h1>What Our Customers Say<br/> About Fines!</h1>
       </div>
       <div className='arrow-buttons'>
        <button className='counter-minus' onClick={minus}> <ArrowLeft fontSize='large' /> </button>
       <span className='count'> {count}</span>
        <button className='counter-plus' onClick={add}> <ArrowRight fontSize='large' /> </button>
       </div>
       </div>
       
       <div className='cutomers-about'> 
       <div className='right-custom'>
        <div className='comment'>
          " the first time I saw it in the app store I <br/>
          was very curious. after trying it for a few <br/>
          months, I'm very satisfied with the ease <br/>
          and performance of this application."
        </div>
        <div className='preview'>
        <div className='profile1'>
          <img className='img' src={profile}  alt=" " />
        </div>
        <div className='profile-info'>
          <p className='custom'>Douglas Morgan</p>
          <p className='custom-state'> <span className='star'>&#9733;</span> 4.9/5.0 Ratings </p>
        </div>
        </div>
       </div>
      
       <div className='left-custom'>
        <div className='comment'>
          " the first time I saw it in the app store I <br/>
          was very curious. after trying it for a few <br/>
          months, I'm very satisfied with the ease <br/>
          and performance of this application."
        </div>
        <div className='preview'>
        <div className='profile1'>
          <img className='img' src={profile2}  alt=" " />
        </div>
        <div className='profile-info'>
          <p className='custom'>Edward Teach</p>
          <p className='custom-state'> <span className='star'>&#9733;</span> 4.9/5.0 Ratings </p>
        </div>
        </div>
       </div>
      </div>
  </div>
   );
}
export default About;