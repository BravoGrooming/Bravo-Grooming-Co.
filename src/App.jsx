import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import SignupPage from './pages/SignupPage';
import ScienceOfBioactive from './pages/ScienceOfBioactive';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="science-of-bioactive" element={<ScienceOfBioactive />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
