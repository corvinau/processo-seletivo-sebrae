import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListOptions from './pages/ListOptions';
import Table from './pages/Tabela';
import Cep from './pages/Cep';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ListOptions />} />
          <Route path='/table' element={<Table />} />
          <Route path='/cep' element={<Cep />} />
          {/* <Route path='/crud' element={''} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
