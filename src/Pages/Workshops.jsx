import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { workshopsData } from '../assets/Data'
import Navbar from '../Components/Navbar'

export default function Workshops() {
  const [selected, setSelected] = React.useState("practical");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function removeSpaces(str) {
    return str.replace(/\s+/g, "");
  }
  return (

    <div className="work-bg">
      <Navbar />
      <div>
        <h1 className="lg:text-6xl text-4xl font-serif text-white font-bold text-center pt-10">
          WORKSHOPS
        </h1>
        {/* SWITCH/TOGGLE COMPONENT - PILL STYLE */}
        <div className="flex justify-center mt-8">
          <div className="relative bg-violet-950/60 backdrop-blur-sm border border-violet-700 rounded-full p-1 shadow-lg">
            {/* Sliding background indicator */}
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-linear-to-r transition-all duration-500 ease-in-out ${selected === "practical"
                ? "left-1 from-violet-600 to-fuchsia-600"
                : "left-[calc(50%+2px)] from-cyan-600 to-blue-600"
                }`}
            />
            {/* Practical ML Option */}
            <button
              onClick={() => setSelected("practical")}
              className={`relative px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-colors duration-300 z-10 ${selected === "practical" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
            >
              Practical ML
            </button>

            {/* Cyber Chase Option */}
            <button
              onClick={() => setSelected("cyber")}
              className={`relative px-6 py-2.5 rounded-full text-sm lg:text-base font-medium transition-colors duration-300 z-10 ${selected === "cyber" ? "text-white" : "text-slate-300 hover:text-white"
                }`}
            >
              Cyber Chase
            </button>
          </div>
        </div>
        {isMobile ?
          <>
            <div className="flex flex-col items-center justify-center px-5 mt-10 gap-8">
              <img
                src={workshopsData[selected].image}
                alt={workshopsData[selected].title}
                className="w-full rounded-xl aspect-video object-cover"
              />

              <div className="bg-violet-950/60 border border-violet-800 rounded-xl text-white p-4 w-full text-center">
                <p>Date: <b>{workshopsData[selected].date}</b></p>
                <p>Fees: <b>{workshopsData[selected].fees}</b></p>
              </div>

              <div className="ws-bg w-[110%] px-6 py-12 flex flex-col items-center text-center">
                <div className="w-[74%] flex flex-col gap-0.2 items-center">
                  <p className="text-white italic text-xs px-2 pt-8">
                    {workshopsData[selected].long_desc}
                  </p>
                </div>

                <div className="space-y-2 pb-15">
                  <h2 className="text-xl font-cinzel mt-5 text-white">Co-ordinators</h2>
                  <div className="text-white text-xs">
                    {workshopsData[selected].coordinators.map((coordinator, index) => (
                      <p key={index} className="opacity-90">
                        {coordinator.name}: <span className="font-mono text-cyan-300">{coordinator.contact}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <div className="flex justify-center px-6">
              {/* Added items-stretch to ensure both sides have similar height footprint */}
              <div className="flex flex-col lg:flex-row mt-2 items-stretch justify-center gap-10 max-w-7xl">

                {/* LEFT : IMAGE & INFO */}
                <div className="flex flex-col items-center justify-center w-full lg:w-1/3">
                  <img
                    src={workshopsData[selected].image}
                    alt={workshopsData[selected].title}
                    className="w-full rounded-xl object-cover shadow-md aspect-video"
                    loading="lazy"
                  />
                  <div className="w-full flex flex-col gap-6 mt-6">
                    <h2 className="text-2xl lg:text-2xl text-slate-200 font-cinzel font-semibold">
                      {workshopsData[selected].title.toUpperCase()}
                    </h2>
                    <div className="bg-violet-950/50 border border-violet-800 rounded-xl text-slate-100 p-5">
                      <p>Date: <span className="font-bold">{workshopsData[selected].date}</span></p>
                      <p>Fees: <span className="font-bold">{workshopsData[selected].fees}</span></p>
                    </div>
                    {/* Registration Button Logic stays here */}
                  </div>
                </div>

                {/* RIGHT : THE SCROLL CARD */}
                {/* <div className="ws-bg w-180 h-185 flex flex-col mt-9 items-center justify-center text-center">
                  <div className="w-[80%] md:w-[60%] lg:w-[50%] flex flex-col gap-12">

                    <div className=" pt-14 ">
                      <h2 className="text-3xl font-cinzel text-white border-b border-white/20 pb-1 inline-block">
                        About
                      </h2>
                      <p className="text-white text-xs md:text-base leading-relaxed">
                        {workshopsData[selected].description}
                      </p>
                    </div>

                    <div className="space-y-2 pb-25">
                      <h2 className="text-2xl font-cinzel text-white">Co-ordinators</h2>
                      <div className="text-white text-sm">
                        {workshopsData[selected].coordinators.map((coordinator, index) => (
                          <p key={index} className="opacity-90">
                            {coordinator.name}: <span className="font-mono text-cyan-300">{coordinator.contact}</span>
                          </p>
                        ))}
                      </div>
                    </div>

                  </div>
                </div> */}
                <div className="ws-bg w-150 mt-10 pt-15 pb-20 flex flex-col items-center justify-center text-center">
                  {/* Content Wrapper: Controls width so text stays inside the scroll gold borders */}
                  <div className="w-[59%] flex flex-col gap-4">
                    <div className="space-y-2 ">
                      <h2 className="text-3xl mt-10 font-cinzel text-white border-b border-white/20 pb-2 inline-block">
                        About
                      </h2>
                      <p className="text-white italic text-sm">
                        {workshopsData[selected].long_desc}
                      </p>
                      <div className="space-y-2 pb-12">
                        <h2 className="text-2xl font-cinzel mt-5 text-white">Co-ordinators</h2>
                        <div className="text-white text-sm">
                          {workshopsData[selected].coordinators.map((coordinator, index) => (
                            <p key={index} className="opacity-90">
                              {coordinator.name}: <span className="font-mono text-cyan-300">{coordinator.contact}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </>
        }

      </div>
    </div >
  );
}
