
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Layout/Home';
import Navbar from '../Layout/Navbar';
import About from '../Component/About/About';
import Contact from '../Component/Contact/Contact';
import Features from '../Component/Features/Features';
import Services from '../Component/Services/Services';
import LogIn from '../Component/Login/LogIn';
import SignUp from '../Component/SignUp/SignUp';
import './App.css';

function App(){
  return (
   <Router>
    <div className='App'> 
      <Navbar/>
    <Switch>
       <Route exact path="/" >
        <Home />
        <Contact />
       </Route>
       <Route path="/About" >
        <About />
        <Contact />
       </Route>
       <Route path="/Contact" >
        <Contact />
       </Route>
       <Route path="/Features" >
        <Features />
        <Contact />
       </Route>
       <Route path="/Services" >
        <Services />
        <Contact />
       </Route>
       <Route path="/LogIn" >
        <LogIn />
       </Route>
       <Route path="/SignUp" >
        <SignUp />
       </Route>
    </Switch>
    </div> 
   </Router>
   );
}
  
export default App;