// App.jsx
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Picturesearch from './Components/Picturesearch';
import Diseases_search from './Components/Diseases_search';
import Error from './Components/Error';
import Dashboard from './Components/Dashboard';
function App() {
  const [userEmail, setUserEmail] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
      <section className='main relative'>
        <Router>
          <Routes>
            <Route
              path="/"
              index
              element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userEmail={userEmail} setUserEmail={setUserEmail} userPicture={userPicture} setUserPicture={setUserPicture}/>}
            />
            <Route path='/pics' element={<Picturesearch userEmail={userEmail} userPicture={userPicture}/>} />
            <Route path='/disease' element={<Diseases_search userEmail={userEmail} userPicture={userPicture}/>} />
            <Route path="/error" element={<Error />} />
            <Route path='/dashboard' element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        </Router>
      </section>
  );
}

export default App;
