import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PUBLIC_ROUTE_ARR, PRIVATE_ROUTE_ARR } from './Route';
import { PrivateRoute } from './components/util/CustomRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PUBLIC_ROUTE_ARR.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}

          {PRIVATE_ROUTE_ARR.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={
                  // <PrivateRoute>
                  <route.element />
                  // </PrivateRoute>
                }
                key={index}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
