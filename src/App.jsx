import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import ErrorBoundary from './components/ErrorBoundary';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginPage from './components/login/LoginPage';
import Home from './components/Home';
import SickleCell from './components/SickleCell/SickleCell';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={
                <ErrorBoundary>
                  <Suspense>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route path="/Sickle Cell" element={
               <ErrorBoundary>
               <Suspense>
               <SickleCell/>
               </Suspense>
             </ErrorBoundary>
            
              
              }/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
