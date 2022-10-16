import serviceImage from '../Services/service.jpeg';
import './Services.css';
const Services = () => {
  return ( 
    <div>
      <div className='service'>
        <div className='left-section'>
          <div className='header'><h1>Every Transication Just <br/> Become So Easy</h1></div>
          <div className='transfer'>
            <div className='span'>01</div>
            <div className='p'>
             <h2 className='h2'>Easy Transfer in a Few Seconds</h2>
             <p className='p1'>Lorem ipsum dolor sit amet, consetctetur adipiscing elit. in <br/>
                volutpat penatibus laoreet mi nisi. Mauris pulvinar nisi.
             </p>
            </div>
          </div>

          <div className='cashflow'>
          <div className='span'>02</div>
            <div className='p'>
             <h2 className='h2'>Keep Your Cashflow clear</h2>
             <p className='p1'>Lorem ipsum dolor sit amet, consetctetur adipiscing elit. in <br/>
                volutpat penatibus laoreet mi nisi. Mauris pulvinar nisi.
             </p>
            </div>
          </div>
          <div className='monitoring'>
          <div className='span'>03</div>
          <div className='p'><h2 className='h2'>Monitor All Transacation</h2>
          <p className='p1'>Lorem ipsum dolor sit amet, consetctetur adipiscing elit. in <br/>
                volutpat penatibus laoreet mi nisi. Mauris pulvinar nisi.
             </p>
             </div>
          </div>
        </div>
        <div className='right-section'>
         <div className='paragraph'>You can make all kind of transacation such as payments,<br/>
         top ups, transfer, to saving very easily with a simple user <br/>
          interface and easy to understand by all the people.
         </div>
         <div className='_img'>
          <img className='serviceImage' src={serviceImage} alt=" " />
         </div>
        </div>
      </div>
    </div>
   );
}
export default Services;