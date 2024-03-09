// App.jsx
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Picturesearch from './Components/Picturesearch';
import Diseases_search from './Components/Diseases_search';
import Error from './Components/Error';

function App() {
  
  return (
      <section className='main relative'>
        <Router>
          <Routes>
            <Route
              path="/"
              index
              element={<Home/>}
            />
            <Route path='/pics' element={<Picturesearch />} />
            <Route path='/disease' element={<Diseases_search />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </Router>
      </section>
  );
}

export default App;
