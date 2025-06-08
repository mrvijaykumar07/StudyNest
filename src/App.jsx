

import './index.css'
import Navbar from './Pages/LandingPage/Navbar'
import MainPage from './Pages/LandingPage/MainPage'
import BrandSlider from './Pages/LandingPage/BrandSlider '
import Content1 from './Pages/LandingPage/ContentComponent/Content1'
import StatsSection from './Pages/LandingPage/ContentComponent/StatusSection'
import DeeperDiveCards from './Pages/LandingPage/ContentComponent/DeeperDiveCards'
import Content3 from './Pages/LandingPage/ContentComponent/Content3'
import Footer from './Pages/LandingPage/Footer'


function App() {


  return (
    <>
   <Navbar/>
   <MainPage/>
   <BrandSlider/>
   <Content1/>
   <StatsSection/>
   <Content3/>
   <DeeperDiveCards/>
   <Footer/>
 
    </>
  )
}

export default App
