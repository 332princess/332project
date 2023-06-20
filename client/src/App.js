import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PUBLIC_ROUTE_ARR, PRIVATE_ROUTE_ARR } from './Route';
import { PrivateRoute } from './components/util/CustomRoute';
import Home from './pages/HomePage';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {PUBLIC_ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}

        {PRIVATE_ROUTE_ARR.map((route, index) => {
          return (
            <Route
              path={route.path}
              element={
                <PrivateRoute>
                  <route.element />
                </PrivateRoute>
              }
              key={index}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
