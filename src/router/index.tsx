import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LaunchList from '../components/LaunchList';
import LaunchDetail from '../components/LaunchDetail';

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="/detail/:id" element={<LaunchDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
