import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginPage from './components/login/LoginPage';
import MainLayout from './components/MainLayout';
import SickleCell from './components/sickleCell/SickleCellPage';
import BreastCancer from './components/breastCancer/BreastCancerPage';;
import DashboardPage from './components/dashboard/DashboardPage';
import CervicalCancerPage from './components/cervicalCancer/CervicalCancerPage';

function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Protected Routes for authenticated users */}
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <DashboardPage />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/sickle-cell"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <SickleCell />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/breast-cancer"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <BreastCancer />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/cervical-cancer"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <CervicalCancerPage />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
