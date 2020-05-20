import React, { Component } from 'react';
import '../styles/App.css'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';




class App extends Component {
  state = {  }
  render() { 
    return (  

<Router>
<div className="app">
 <header>
{<Header/>}


 </header>
 <main>
   <aside>
   {<Navigation/>}
   </aside>
   <section className="page">
      {<Page/>}
   </section>
 </main>
 <footer>
    {<Footer/>}
 </footer>

</div>
</Router>
    );
  }
}
 
export default App;