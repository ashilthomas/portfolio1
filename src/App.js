


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./combonents/navbar/Header";
import Home from './combonents/home/Home';
import About from './combonents/about/About';
import Service from './combonents/service/Service';
import Portfolio from './combonents/portfolio/Portfolio';
import Contact from './combonents/contact/Contact';
import Footer from './combonents/footer/Footer';

function App() {
  return (
    <div >
       <Header/>
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
