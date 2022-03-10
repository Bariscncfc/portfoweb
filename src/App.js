import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
        <header>
            <Header />
        </header>
       <body>
       <Hero/>
       <About/>
       <Projects/>
       <Contact/>
       </body>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
}

export default App;
