import React from 'react';
import {Route, Switch} from 'react-router-dom'
import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';

import "../styles/Header.css"


const Header = () => {
    return ( 
<React.Fragment> 


    <Switch>
<Route path="/" exact render={()=> (<img src={img1} alt='woda' />)}/>
<Route path="/products" render={()=> (<img src={img1} alt='woda' />)}/>
<Route path="/contact" render={()=> (<img src={img2} alt='ananas' />)}/>
<Route path="/admin" render={()=> (<img src={img3} alt='las' />)}/>
<Route  render={()=> (<img src={img4} alt='las' />)}/>

</Switch>







    
</React.Fragment>
      
          

        
     );
}
 
export default Header;