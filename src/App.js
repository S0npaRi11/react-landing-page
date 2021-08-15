import './App.css';

import Hero from './Components/hero'
import Navbar from './Components/_navbar'
import About from './Components/about'
import Portfolio from './Components/portfolio'
import News from './Components/news'
import JoinUs from './Components/joinus'
import Footer from './Components/footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <News />
      <JoinUs />
      <Footer />
    </>
  );
}

export default App;
