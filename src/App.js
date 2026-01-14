import './App.css';

import Navigation from './components/nav/Navigation.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home.js';
import Sign from './components/pages/Sign.js';
import NotFound from './components/NotFound/NotFound.js';
import CertificatesPage from './components/pages/CertificatesPage.js';
import Task from './components/tasks/Task.js';
import Soon from './components/soon/Soon.jsx';
import Solution from './components/solution/Solution.jsx';


function App() {
  return (
    <div className="App">


  <BrowserRouter>
        
          

          <Routes>

            
            
            <Route path='/' element={<Home/>}/>
            <Route path='/sertificates' element={<CertificatesPage/>}/>
            <Route path='/sign' element={<Soon/>}></Route>
            <Route path='/listen' element={<Soon/>}></Route>
            <Route path='/task' element={<Task/>}></Route>
            <Route path='/solution' element={<Solution/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        
          </Routes>
        
        

          <Navigation/>
          
        
          
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
