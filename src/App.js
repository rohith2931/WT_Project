import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {Routes,Route,Navigate} from 'react-router-dom'
import Voterlogin from './Components/Voterlogin'
import Dovote from './Components/Dovote'
import Adminlogin from './Components/Adminlogin';
import Admin from './Components/Admin'
import Admindashbord from './Components/Admindashboard' 
import Addvoter from './Components/Addvoter';
import Addcandidate from './Components/Addcandidate';
import Pool from './Components/Pool';


function App() {
  return (
    <div>
      <Header/>
      <div className="main">
      <Routes>
        <Route  path="/" element={<Voterlogin/>} />
        <Route  path ="/vote" element={<Dovote/>} />
        <Route  path ="/admin" element={<Admin/>} >
          <Route  path ="/admin" element={<Navigate replace to="/admin/login" />} />
          <Route path ="/admin/login" element={<Adminlogin/>} />
          <Route path ="/admin/dashboard" element={<Admindashbord/>} >
              {/* <Route  path ="/admin/dashboard" element={<Navigate replace to="pool" />} /> */}
              <Route  path ="addvoter" element={<Addvoter/>} />
              <Route  path ="addcandidate" element={<Addcandidate/>} />
              <Route  path ="pool" element={<Pool/>} />
          </Route>
        </Route>
        
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
