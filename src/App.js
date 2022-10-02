
import './App.css';
import Navbar from './components/Navbar';
import Newscontainer from './components/Newscontainer';
import { useState } from 'react';
import LoadingBar  from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";


function App() {
  const [progress, setProgress] = useState(0)
  return (
<>
<Router>
<Navbar/>
<LoadingBar
        color='#f11946'
        progress={progress}
       
      />
  <Routes> 
    <Route  path='/' exact element={<Newscontainer  setProgress={setProgress}   category='general' country='in' pageSize='5'/> }/>
    
    <Route  exact path='/business' element ={<Newscontainer setProgress={setProgress} category='business'country='in' pageSize='5'/> }/>
   <Route  exact path='/entertainment' element={<Newscontainer setProgress={setProgress} category='entertainment'country='in' pageSize='5'/> }/>
   <Route  exact path='/general'   element={<Newscontainer setProgress={setProgress} category='general'country='in' pageSize='5'/> }/>
    <Route  exact  path='/health'element={<Newscontainer  setProgress={setProgress} category='health'country='in' pageSize='5'/> }/>
   <Route  exact path='/science' element={<Newscontainer setProgress={setProgress} category='science'country='in' pageSize='5'/> }/>
   <Route  exact path='/sports' element={<Newscontainer setProgress={setProgress} category='sports'country='in' pageSize='5'/> }/>
    <Route exact path='/technology' element={<Newscontainer setProgress={setProgress}  category='technology' country='in' pageSize='5'/> }/>
    
    
  </Routes>
</Router>
  
  

  
  

</>
   
  )
}

export default App;
