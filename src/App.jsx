
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/LandingPage/Navbar';
import MainPage from './Pages/LandingPage/MainPage';
import Footer from './Pages/LandingPage/Footer';
import LibrariesPage from './Pages/LandingPage/LibrariesPage';
import PopularLibraries from './Pages/LandingPage/PopularLibraries';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage />
              <PopularLibraries />
            </>
          }
        />
        <Route path="/libraries" element={<LibrariesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
