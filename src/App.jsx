import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SignupPage from './pages/SignupPage';
import ScienceOfBioactive from './pages/ScienceOfBioactive';
import ProductPage3 from './pages/ProductPage3';
import OurStoryPage from './pages/OurStoryPage';
import RitualPage from './pages/RitualPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Full Site Routing */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="ritual" element={<RitualPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="science-of-bioactive" element={<ScienceOfBioactive />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
