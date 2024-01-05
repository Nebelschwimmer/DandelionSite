import './videoSection.scss'
import videoLarge from './WebSiteVideo2.mp4'
import Media from 'react-media';
import videoSmall from './video_mob.mp4'

export const VideoSection = () => {


  return (
  <section className='section1'>

  <Media queries={{
            small: "(max-width: 580px)",
            large: "(min-width: 768px)"
          }}>
            {matches => (
              <>
                {matches.small && 
                  <div className="section1__video__container">
              
                  <video  className="section1__video" autoPlay muted loop>
                    <source src={videoSmall} type="video/webm"/>
                  </video>
                
                    <div>
                    <div className='section1__upper_text__wrapper'>
                      <span className='section1__text__bold'>DANDELION</span>
                      <span className='section1__text'>ЭТО ВАШ ШАНС</span>
                      <span className='section1__text'>ДОМИНИРОВАТЬ</span>
                      <span className='section1__text'>В БИЗНЕСЕ</span>
                    </div>
                  
                  </div>
                  <span className='motivation__golden__line'></span>
                
                  </div>
                }
                {matches.large && 
                  <div className="section1__video__container">
    
                  <video src={videoLarge} className="section1__video" autoPlay muted loop>
                  </video>
                    <div>
                      <div className='section1__upper_text__wrapper'>
                        <span className='section1__text__bold'>DANDELION - </span>
                        <span className='section1__text'>ЭТО ВАШ ШАНС</span>
                        <span className='section1__text'>ДОМИНИРОВАТЬ</span>
                        <span className='section1__text'>В БИЗНЕСЕ</span>
                      </div>
                    
                    </div>
                    <span className='motivation__golden__line'></span>
                    
                  </div>
                }
              </>
            )}
        </Media>
  </section>
  )
  }