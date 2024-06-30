import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddApplication from './components/AddApplication';
import ViewApplications from './components/ViewApplications';
import ListCompanies from './components/ListCompanies';

function App() {

  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddApplication />} />
          <Route path='/applications' element={<ViewApplications />} />
          <Route path='/startups' element={<ListCompanies />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
