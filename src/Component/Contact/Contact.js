import './Contact.css';
import image from '../Contact/contact.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Contact = () => {
  return ( 
    <div className='contact-container'>
        <div className='a-section'>
          <div className='paragraphs'>
            <div className='contact-header'> <h1>Download Fines! and <br/> Join With Happy People</h1> </div>
            <div className='p-contact'><p>now it's your trun to be happy in finance managment</p></div>
            <div className='button'> <button className='Googleplay'> <div className='icon-btn'><PlayArrowIcon color="secondary"/></div>
            <div><span className='spn1'>Got it on <br/> </span> Google Play</div></button></div>
            <div className='button2'> <button className='appstore'> <div className='icon-btn'><AppleIcon/></div>
            <div><span className='spn1'>Download on <br/> </span> AppStore</div></button></div>
          </div>
          <div className='image-contact'>
           <img className='img-contact' src={image} alt=" " />
          </div>
        </div>

      <div className='b-section'>
        <div className='fines-contact'>
          <h1 className="fines-header">Fines!</h1>
          <p className='fines-p'>Fines! 2022<br/> ALL RIGHTS RESERVED</p>
        </div>
        <div className='ABOUT-contact'>
          <div>
          <h4 className='h-contact'>ABOUT</h4>
          <p>About</p>
          <p>Benefit</p>
          <p>Project</p>
          </div>
        </div>
        <div className='INFO-contact'>
        <div>
          <h4 className='h-contact'>INFO</h4>
          <p>Blog</p>
          <p>Contact</p>
          <p>FAQ</p>
        </div>
        </div>
        <div className='contact'>
        <div className='social-media'>
          <p>Curious about new develpments and updates? follow out social media</p>
          <div className="icons">
          <LinkedInIcon />
           <FacebookIcon />
           <InstagramIcon />
           <TwitterIcon />
          </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;