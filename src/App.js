import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import NotFound from './pages/NotFound';
import Nav from './components/NavBar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ComingSoon from './pages/ComingSoon';
import VolunteerPage from './pages/Volunteer';

function App() {
  return (
    <div className='min-h-screen m-0 p-0 overflow-x-hidden box-border scroll-smooth font-primary-font text-[#333]'>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/career" element={<ComingSoon />} />
          <Route path="/media" element={<ComingSoon />} />
          <Route path='/volunteer' element={<VolunteerPage />} />
          <Route path="*" element={<NotFound />} />
          
          {/* Route that shouldn't be accessible if the user is logged in */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>

          {/* Route that shouldn't be accessible if the user is not logged in */}
          <Route element={<ProtectedRoute />}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;