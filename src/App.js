// import Hero from './Hero';
// import './App.css';
// import { Routes ,Route } from 'react-router-dom';
// import Price from './Price';
// import Service from './Service';
// import About from './About';
// import Mission from './Mission';
// function App() {
//   return (
//  <div>
 
// <Hero />
// <Routes>
// <Route exact path="/about" element={<About />} />

// <Mission />
// <Service />
// <Price />
// </Routes>
//  </div>
//   )
// }

// export default App;



import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import Price from './Price';
import Service from './Service';
import About from './About';
import Mission from './Mission';
import Fetch from './Fetch';
import SignUp from './SignUp';
import Footer from './Footer';
import Contact from './Contact';
import Blog from './Blog';
import Book from './Book';

function App() {
  return (
<>
    <Router>
    <div className='App'>
   
         
   <NavBar />


<Switch>
    
      <Route exact path="/mission">
        <Mission  />
      </Route>
      <Route exact path="/price">
       <Blog/>
      </Route>
      <Route exact path="/">
        <Home  />
        <About />
      </Route>
      <Route exact path="/signup">
        <SignUp  />
      </Route>
      <Route exact path="/fetch">
      <Fetch />
      </Route>
      <Route exact path="/contact">
      <Contact />
      </Route>
      <Route exact path="/book">
      <Book/>
      </Route>
      </Switch>
      
    
   
      
   
    </div>
 
    </Router>
  <Footer />
    
    </>
    
  );
}

export default App;

