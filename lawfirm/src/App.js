import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import HeroSection from './component/Herosection/herosection';
import Navbar from './component/Navbar/navbar';
import Section2 from './component/section2/section2';
import Chooseus from './component/Chooseus/choose';
import Card from './component/Card/card';
import AOPcards from './component/AreaofPractice/AOPcards';
import Crousel from './component/crousel/crousel';
import { Team } from './component/Team/team';
import Faq from './component/FAQ/faq';
import Subscribebox from './component/Subscribebox/subscribebox';
import Footer from './component/Footer/footer';
// import HeroSection from "./component/Herosection"

function App() {
  return (
    <div >
      <StyledEngineProvider injectFirst>
        <div className='upperpart'>
      <Navbar/>
      <HeroSection/>
      </div> 
      <div className='lowerpart'>
      <Section2/>
      <Chooseus/>
      <Card/>
      <AOPcards/>
      <Crousel/>
      <Team/>
      <Faq/>
      <Subscribebox/>
      <Footer/>
      </div>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
