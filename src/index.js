import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import About from './app/routes/About';
import Projects from './app/routes/Projects';
import Learning from './app/routes/Learning';
import { BrowserRouter, Routes, Route } from 'react-router';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="learning" element={<Learning />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
