import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HttpClient from './services/chat/http';
import ChatService from './services/chat/chat';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL);
const chatService = new ChatService(httpClient);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App chatService={chatService} baseURL={baseURL} />
  </React.StrictMode>
);

reportWebVitals();
