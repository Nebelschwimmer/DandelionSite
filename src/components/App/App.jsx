import React, { useState, useEffect } from "react";
import './app.scss'
import { Header } from '../Header/Header';
import { SectionPics } from '../SectionPics/SectionPics';
import { SectionForm } from '../SectionForm/SectionForm';
import { VideoSection } from '../VideoSection/VideoSection';
import { Footer } from '../Footer/Footer';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { SectionMotivation } from "../SectionMotivation/SectionMotivation";
import { options } from "../../utils/utils.js"
import { useRef} from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import { Admin } from "../Admin/Admin.jsx";

const App = () => {

  const scrollRef = useRef(null)
  const [glow, setGlow] = useState(false)
  const [users, setUsers] = useState([])
  // const [isLoading, setLoading] = useState(true);





  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const navigate = useNavigate()

  
  // function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
  //   return new Promise(resolve => setTimeout(() => resolve(), 12500));
  // } 
  
  // useEffect(() => {
  //   someRequest().then(() => {
  //     const loaderElement = document.querySelector(".loader-container");
  //     if (loaderElement) {
  //       loaderElement.remove();
  //       setLoading(!isLoading);
  //     }
  //   });
  // });

  // if (isLoading) {
  //   return null;
  // }



  
  return (
    <>
    
  
    <Header setGlow={setGlow} scrollRef={scrollRef}/>
    <main className='content'>

    <Routes>
    <Route element={<Admin users={users} setUsers={setUsers}/>} path="/admin"></Route>

    <Route element={
      <div>
          <VideoSection/>
          <SectionMotivation/>
          <SectionPics/>
          <SectionForm users={users} setUsers={setUsers} glow={glow} setGlow={setGlow} ref={scrollRef}/>
      </div>
          } path="/">
      </Route>
      <Route
        path="*"
        element={
          <div  className="container__404">
          <div className="title__404">
            Страница не найдена
          
            <button
              className="btn__404"
              onClick={() => navigate("/")}
            >
              На главную
            </button>
          </div>
          </div>
          }
            ></Route>
        
        </Routes>
        </main>
      <Particles  options={options} init={particlesInit} />
      <Footer />
    </>
  );
}

export default App;
