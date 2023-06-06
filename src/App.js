import './App.css';
import TopSection from './components/TopSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';
import {ScrollContainer} from 'react-scroll-motion';
import SectionThree from './components/SectionThree';
import About from './components/About';

function App() {

  return (
    <ScrollContainer>
      <TopSection />
      <About />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </ScrollContainer>
  );
}

export default App;
