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
import EditDashboardPage from './components/dashboard/EditDashboardPage';
import EditSickleCellPage from './components/sickleCell/EditSickleCellPage';
import EditBreastCancer from './components/breastCancer/EditBreastCancer';
import EditCervicalCancer from './components/cervicalCancer/EditCervicalCancer';
import EditResultPage from './components/dashboard/EditResultPage';
import ViewDashboardPage from './components/dashboard/ViewDashboardPage';
import ViewCervicalCancerPage from './components/cervicalCancer/ViewCervicalCancerPage';
import ViewBreastCancerPage from './components/breastCancer/ViewBreastCancerPage';
import ViewSickleCellPage from './components/sickleCell/ViewSickleCellPage';
import EditCCResultPage from './components/cervicalCancer/EditCCResultPage';
import EditBCResultPage from './components/breastCancer/EditBCResultPage';
import EditSCResultPage from './components/sickleCell/EditSCResultPage';

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
              path="/edit-dashboard/:id"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <EditDashboardPage />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/edit-result-dashboard"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EditResultPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/view-dashboard-page"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ViewDashboardPage />
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
              path="/edit-sickle-cell/:id"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <EditSickleCellPage />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/view-sickle-cell"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ViewSickleCellPage />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/edit-result-sickle-cell"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EditSCResultPage />
                  </Suspense>
                </ErrorBoundary>
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
              path="/edit-breast-cancer/:id"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <EditBreastCancer />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/view-breast-cancer"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ViewBreastCancerPage />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/edit-result-breast-cancer"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EditBCResultPage />
                  </Suspense>
                </ErrorBoundary>
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

            <Route
              path="/edit-cervical-cancer/:id"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <EditCervicalCancer />
                    </Suspense>
                  </ErrorBoundary>
                </MainLayout>
              }
            />

            <Route
              path="/edit-result-cervical-cancer"
              element={
                // <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                <ErrorBoundary>
                  <Suspense fallback={<div>Loading...</div>}>
                    <EditCCResultPage />
                  </Suspense>
                </ErrorBoundary>
                // </MainLayout>
              }
            />

            <Route
              path="/view-cervical-cancer"
              element={
                <MainLayout activeTab={activeTab} setActiveTab={setActiveTab}>
                  <ErrorBoundary>
                    <Suspense fallback={<div>Loading...</div>}>
                      <ViewCervicalCancerPage />
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
