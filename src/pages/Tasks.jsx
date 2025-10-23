import React from 'react';
import Layout from '../components/Layout';
import TaskManager from '../components/TaskManager';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Button from '../components/Button';

export default function TasksPage() {
  return (
    <ThemeProvider>
      <Layout>
        <TaskManager />
      </Layout>
    </ThemeProvider>
  );
}
