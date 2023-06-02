import './App.css';
import TopSection from './components/TopSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';
import {ScrollContainer,ScrollPage} from 'react-scroll-motion';
import SectionThree from './components/SectionThree';

function App() {

  return (
    <ScrollContainer>
      <TopSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </ScrollContainer>
  );
}

export default App;
