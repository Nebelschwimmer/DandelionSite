import React, { useState} from "react";
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
import Media from 'react-media';
const App = () => {

  const scrollRef = useRef(null)
  const [glow, setGlow] = useState(false)
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(true)






  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const navigate = useNavigate()



  
  return (
    <>

    
  
    <Header setGlow={setGlow} scrollRef={scrollRef}/>
    <main className='content'>

    <Routes>
    <Route element={<Admin users={users} setUsers={setUsers} showModal={showModal} setShowModal={setShowModal}/>} path="/ad23min45"></Route>

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
      
        <Media queries={{
            small: "(max-width: 480px)",
            large: "(min-width: 768px)"
          }}>
            {matches => (
              <>
                {matches.small &&
                  <div></div> 
                }
                {matches.large && 
                <Particles  options={options} init={particlesInit} />
                }
              </>
            )}
        </Media>

      <Footer />
    </>
  );
}

export default App;
