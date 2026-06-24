// React Imports
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// CSS Imports
import "../css/Homepage.css";

// Components Imports
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Homepage Component
export default function Homepage() {
  return (
    <div className="app-root">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
