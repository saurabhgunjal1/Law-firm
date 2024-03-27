import logo from './logo.svg';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import HeroSection from './component/Herosection/herosection';
import Navbar from './component/Navbar/navbar';
// import HeroSection from "./component/Herosection"

function App() {
  return (
    <div >
      <StyledEngineProvider injectFirst>
        <div className='upperpart'>
      <Navbar/>
      <HeroSection/>
      </div>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
