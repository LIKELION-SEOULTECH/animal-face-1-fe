import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import CollectionPage from '@/pages/collection/CollectionPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;