
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

/* Pages */
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="app-wrapper bg-[#0f172a] text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
          </AnimatePresence>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
