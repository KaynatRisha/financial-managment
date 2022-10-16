import {Link} from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return ( 
    <nav className="navbar">
     <div className='left-side'>
     <Link to="/">Fines!</Link>
     </div>
     <div className='middle-side'>
       <Link to="About">About</Link>
       <Link to="Features">Features</Link>
       <Link to="Services">Services</Link>
       <Link to="Contact">Contact</Link>
     </div>
     <div className='right-side'>
      <Link to="LogIn"><button className='login'>Log in</button></Link>
      <Link to="SignUp"><button className='signup'>SignUp</button></Link>
     </div>  
     </nav>

   );
}
 
export default Navbar;