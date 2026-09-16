import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Switch from "./components/Switch";
import Skills from "./components/sections/Skills";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import Typewriter from "typewriter-effect";
import { Tilt } from "react-tilt";
import HeroImg from "./images/HeroImage.png";
import { Bio } from "./data/constants";

import Certifications from "./components/sections/Certifications";
import StarCanvas from "./components/canvas/Stars";
import HeroBgAnimation from "./components/HeroBgAnimation";

import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";

const BG_VIDEO = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const ScrollProgressBar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #945cf2, #0046d1, #cc00bb);
  transform-origin: 0%;
  z-index: 9999;
`;

const SocialButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  backdrop-filter: blur(8px);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(255, 255, 255, 0.08);
  }
`;

function App() {
  const [openModal, setOpenModal] = useState<{ state: boolean; project: any }>({
    state: false,
    project: null,
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-content");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollProgressBar style={{ scaleX }} />
        <Navbar />
        <Body>
          <AnimatePresence>
            <div className="w-full min-h-screen bg-[#080816] text-white">
              
              {/* Root Liquid Glass Hero Container */}
              <div id="About" className="relative w-full min-h-screen overflow-hidden bg-[#080816] flex flex-col">
                
                {/* Default Background Particle Animations */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <StarCanvas />
                  <HeroBgAnimation />
                </div>
                
                {/* Looping Background Video Overlay */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-75 pointer-events-none z-0"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={BG_VIDEO}
                />
                
                {/* Overlay for cinematic ambient lighting */}
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080816] via-transparent to-black/20 z-10 pointer-events-none" />

                {/* Hero content area */}
                <div className="relative w-full min-h-screen z-20 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-32 pt-28 pb-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col justify-center text-left w-full max-w-3xl"
                  >
                    
                    {/* Profile Picture */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="mb-6"
                    >
                      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
                        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl animate-[float_6s_ease-in-out_infinite] flex items-center justify-center">
                          <img
                            className="block w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            src={HeroImg}
                            alt="Profile Image"
                          />
                        </div>
                      </Tilt>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4"
                    >
                      Hi, I am <br />
                      <span className="text-[#945cf2] font-semibold">{Bio.name}</span>
                    </motion.h1>
                    
                    {/* Typewriter roles */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-white text-xl sm:text-2xl lg:text-3xl font-medium mb-5 flex flex-wrap items-center gap-2"
                    >
                      <span>I am an</span>
                      <span className="text-[#945cf2] font-semibold">
                        <Typewriter
                          options={{
                            strings: Bio.roles,
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
                    >
                      {Bio.description}
                    </motion.p>
                    
                    {/* Primary CTAs */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex flex-wrap items-center gap-4"
                    >
                      <div className="w-[180px]">
                        <Switch href={Bio.resume} />
                      </div>
                      <SocialButton
                        href={Bio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                        GitHub
                      </SocialButton>
                      <SocialButton
                        href={Bio.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={18} />
                        LinkedIn
                      </SocialButton>
                    </motion.div>

                  </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 right-6 z-30 flex items-center justify-center">
                  <motion.button 
                    onClick={scrollToPortfolio}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full liquid-glass text-white/75 hover:text-white transition-colors cursor-pointer animate-bounce flex items-center justify-center"
                    aria-label="Scroll down"
                  >
                    <ArrowDown size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Portfolio Sections Container */}
              <div id="portfolio-content" className="relative z-10 bg-[#080816] overflow-hidden">
                {/* Ambient Nebula Glowing Blobs */}
                <div className="absolute top-10 left-[-100px] w-[500px] h-[500px] bg-[#854CE6]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
                <div className="absolute top-[30%] right-[-100px] w-[500px] h-[500px] bg-[#0046d1]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
                <div className="absolute bottom-[20%] left-[-150px] w-[600px] h-[600px] bg-[#cc00bb]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
                <div className="absolute bottom-10 right-[-100px] w-[450px] h-[450px] bg-[#945cf2]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <Skills />
                <Wrapper>
                  <Experience />
                </Wrapper>
                <Certifications />
                <Projects openModal={openModal} setOpenModal={setOpenModal} />
                <Wrapper>
                  <Education />
                  <Contact />
                </Wrapper>
                <Footer />
              </div>

              {/* Project Details Modal */}
              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
          </AnimatePresence>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
