import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SignupPage from './pages/SignupPage';
import ScienceOfBioactive from './pages/ScienceOfBioactive';
import ProductPage3 from './pages/ProductPage3';


function App() {
  return (
    <Router>
      <Routes>
        {/* Temporary Launch Teaser Route */}
        <Route path="/" element={<ProductPage3 />} />

        {/* Catch-all redirect to homepage to lock other pages */}
        <Route path="*" element={<Navigate to="/" replace />} />

        {/* 
          Disabled Full Site Routing for Launch Teaser
          To re-enable: Uncomment this block and remove the routes above.
          
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="science-of-bioactive" element={<ScienceOfBioactive />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        */}
      </Routes>
    </Router>
  );
}

export default App;
