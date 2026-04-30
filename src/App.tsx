import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UploadPage from './pages/upload/UploadPage';
import LoadingPage from './pages/loading/LoadingPage';
import ResultPage from './pages/result/ResultPage';
import CollectionPage from './pages/collection/CollectionPage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <React.Suspense fallback={<div>로딩 중...</div>}>
        <Routes>
          <Route path="/" element={<UploadPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;