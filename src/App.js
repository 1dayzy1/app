import './App.css';

import Navigation from './components/nav/Navigation.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home.js';
import Sign from './components/pages/Sign.js';
import NotFound from './components/NotFound/NotFound.js';
import CertificatesPage from './components/pages/CertificatesPage.js';


function App() {
  return (
    <div className="App">


  <BrowserRouter>
        
          

          <Routes>

            
            
            <Route path='/' element={<Home/>}/>
            <Route path='/sertificates' element={<CertificatesPage/>}/>
            <Route path='/sign' element={<Sign/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
        
          </Routes>
        
        

          <Navigation/>
          
        
          
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
