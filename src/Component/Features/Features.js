import './Features.css';
import TransformIcon from '@mui/icons-material/Transform';
import SecurityIcon from '@mui/icons-material/Security';
import InventoryIcon from '@mui/icons-material/Inventory';
// import boxShadow from '@mui/system';
const Features = () => {
  return ( 
    <div className='feature-container'>
      <div className='above'>
      <div className="left-feature">
        <h1> We Make Your Financial <br/>
        More Well Organized</h1>
      </div>
      <div className='right-feature'>
        we have features that will make it easier to do all financial<br/>
        transcations and plan saving for the future.<br/>
        Your satisfication is our top priority.
      </div>
      </div>
     
      <div className='below'>
        <div className='transcation'>
          <div className='icons-features'><TransformIcon sx={{boxShadow:"2px 2px 10px 10px lightgreen"}} style={{color: 'green'}} /></div>
          <div> <h3 className='h3'>Easy Transacations </h3> </div>
          <div className='description'>We design each application flow to be easier and simpler than other application.</div>
        </div>
        <div className='protection'>
          <div className='icons-features'><SecurityIcon sx={{boxShadow:"2px 2px 10px 10px #9172EC"}} style={{color: '#9172EC'}} /></div>
          <div> <h3 className='h3'> Safe And protected </h3> </div>
          <div className='description'>Dont worry because the Fines security system from is very good and has been tested with hacker.</div>
        </div>
        <div className='organize'>
          <div className='icons-features'><InventoryIcon sx={{boxShadow:"2px 2px 10px 10px #D050D0"}} style={{color: '#D050D0'}} /></div>
          <div> <h3 className='h3'> Organize With Pocket </h3> </div>
          <div className='description'>This is a Pocket feature that can help you in planning financially for the future</div>
        </div>
      </div>
    </div>
   );
}
 
export default Features;