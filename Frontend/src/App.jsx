import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Hero from './components/Hero';
import WorkoutSession from './components/WorkoutSession';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BmiCalculator from './components/BmiCalculator';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BmiCalculator />
      <Footer />
      <ToastContainer theme='dark' position='top-center' /> 
    </>
  )
}

export default App