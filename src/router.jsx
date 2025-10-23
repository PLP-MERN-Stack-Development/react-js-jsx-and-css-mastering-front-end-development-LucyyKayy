import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TasksPage from './pages/Tasks';
import ApiData from './pages/ApiData';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/api" element={<ApiData />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
