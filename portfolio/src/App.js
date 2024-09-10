import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { Skills } from './Components/Skillcard/Skills';
import {Course} from './Components/Course/Course'
import { Contact } from './Components/Contact/Contact';


function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <Hero/>
    <Skills/>
    <Course/>
    <Contact/>
    </div>
    </>
  );
}

export default App;
