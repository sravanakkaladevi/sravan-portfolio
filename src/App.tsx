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

// Import original background elements
import StarCanvas from "./components/canvas/Stars";
import HeroBgAnimation from "./components/HeroBgAnimation";

import { ArrowDown } from "lucide-react";

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

function App() {
  const [openModal, setOpenModal] = useState<{ state: boolean; project: any }>({
    state: false,
    project: null,
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
        {/* Restored Original Portfolio Navbar */}
        <Navbar />
        <Body>
          <AnimatePresence>
            <div className="w-full min-h-screen bg-[#080816] text-white">
              
              {/* Root Liquid Glass Hero Container */}
              <div id="About" className="relative w-full min-h-screen overflow-hidden bg-[#080816] flex flex-col">
                
                {/* Default Background Particle Animations (Loaded instantly) */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <StarCanvas />
                  <HeroBgAnimation />
                </div>
                
                {/* Looping Background Video Overlay (Blended on top of stars) */}
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-75 pointer-events-none z-0"
                  autoPlay
                  muted
                  loop
                  playsInline
                  src={BG_VIDEO}
                />
                
                {/* Overlay for cinematic ambient lighting and high readability */}
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080816] via-transparent to-black/20 z-10 pointer-events-none" />

                {/* Hero content area (Single Column Layout) */}
                <div className="relative w-full min-h-screen z-20 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-32 pt-28 pb-20">
                  <div className="flex flex-col justify-center text-left w-full max-w-3xl">
                    
                    {/* Profile Picture at the top of the text block */}
                    <div className="mb-6">
                      <Tilt options={{ max: 15, scale: 1.02, speed: 400 }}>
                        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl animate-[float_6s_ease-in-out_infinite] flex items-center justify-center">
                          <img
                            className="block w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            src={HeroImg}
                            alt="Profile Image"
                          />
                        </div>
                      </Tilt>
                    </div>

                    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
                      Hi, I am <br />
                      <span className="text-[#945cf2] font-semibold">{Bio.name}</span>
                    </h1>
                    
                    {/* Typewriter roles */}
                    <div className="text-white text-xl sm:text-2xl lg:text-3xl font-medium mb-5 flex flex-wrap items-center gap-2">
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
                    </div>

                    <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                      {Bio.description}
                    </p>
                    
                    {/* Restored Custom Interactive Resume Switch Button */}
                    <div className="w-[180px] flex justify-start">
                      <Switch href={Bio.resume} />
                    </div>

                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 right-6 z-30 flex items-center justify-center">
                  <button 
                    onClick={scrollToPortfolio}
                    className="w-10 h-10 rounded-full liquid-glass text-white/75 hover:text-white transition-colors cursor-pointer animate-bounce flex items-center justify-center"
                    aria-label="Scroll down"
                  >
                    <ArrowDown size={18} />
                  </button>
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
