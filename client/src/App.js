import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { PUBLIC_ROUTE_ARR, PRIVATE_ROUTE_ARR } from './routes/Route';
import { PrivateRoute } from './util/CustomRoute';
import Home from './pages/home/HomePage';
import Navbar from './components/header/Navbar';
import Join from './pages/chat/Join';
import Chat from './pages/chat/chat';
import ChatService from './services/chat/chat';

function App({ baseURL }) {
  const [username, setUsername] = useState();
  const chatService = new ChatService(baseURL);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {PUBLIC_ROUTE_ARR.map((route, index) => (
            <Route path={route.path} element={<route.element />} key={index} />
          ))}
          <Route
            path="/join"
            element={
              !username ? (
                <Join
                  chatService={chatService}
                  setUsername={(name) => {
                    setUsername(name);
                  }}
                />
              ) : (
                <Navigate to="/chat" replace />
              )
            }
          />

          <Route
            path="/chat"
            element={
              username ? (
                <Chat
                  chatService={chatService}
                  username={username}
                  baseURL={baseURL}
                />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {PRIVATE_ROUTE_ARR.map((route, index) => (
            <Route
              path={route.path}
              element={
                <PrivateRoute>
                  <route.element />
                </PrivateRoute>
              }
              key={index}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
