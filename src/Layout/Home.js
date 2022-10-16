import './Home.css';
import HomeImage from '../Asset/home.jpeg';
import user1 from '../Asset/channel-1.jpeg';
import user2 from '../Asset/channel-2.jpeg';
import user3 from '../Asset/channel-3.jpeg';
import user4 from '../Asset/channel-4.jpeg';
const Home = () => {
  return ( 
  <div className="container">
    <div className='image'> <img className='image' src={HomeImage} alt=" " /></div>
    <div className='left-side-contents'> 
      <h1 className='header'>Simplify Your Financial Managment</h1>
    <div>
      <p className='paragraph'>Control your finance, sort your finance with future
      saving and transcations easily and quickly using Fines! </p>
    </div>
    <div>
      <button className='button'>Download App &#8594;</button>
    </div>
    </div>
    <div className='right-side-contents'>
    <div>
      it's time to feel the ease in your financial managment. Join other happy users
    </div>
    <div className='review'>
    <strong className='strong'>&#9733;</strong> 4.9 (Positive Review)
    </div>
    <div className='grid'>
     <div className="user-pic">
     <img  className='user1' src={user1} alt=" " />
     <img  className='user2' src={user2} alt=" " />
     <img  className='user3' src={user3} alt=" " />
     <img  className='user4' src={user4} alt=" " />
    </div>
    <div>
     <p className='active-users'>400K+ users</p>
    </div>
    </div>
    <div className='total-active-users'>
      <p className='number-of-users'>450K+</p>
      <p className='total-active-users'>Total Active Users</p>
    </div>
    <div className='Downloaded'>
      <p className='number'>600k+</p>
      <p className='downloaded'>Downloaded from all store</p>
    </div>
    </div>
  </div>
   );
}
export default Home;

