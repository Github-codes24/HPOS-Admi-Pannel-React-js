import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginPage from './components/login/LoginPage';
import Home from './components/Home';
import MainLayout from './components/MainLayout';
import SickleCell from './components/sickleCell/SickleCellPage';
import BreastCancer from './components/breastCancer/BreastCancerPage';
import CervicalCancer from './components/cervicalCancer/CervicalCancerPage';
import DashboardPage from './components/dashboard/DashboardPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Protected Routes for authenticated users */}
          <Route element={<ProtectedRoute />}>

            {/* Main Layout that contains Sidebar and Header */}
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <MainLayout>
                    <Suspense fallback={<div>Loading...</div>}>
                      <Home />
                    </Suspense>
                  </MainLayout>
                </ErrorBoundary>
              }
            />
            {/* Dynamic content that changes inside the layout */}
            {/* <Route
              path="/dashboard"
              element={
                <ErrorBoundary>
                  <Suspense>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            /> */}

            <Route
              path="/dashboard"
              element={
                <MainLayout>
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
                <MainLayout>
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
                <MainLayout>
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
                <MainLayout>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <CervicalCancer />
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
