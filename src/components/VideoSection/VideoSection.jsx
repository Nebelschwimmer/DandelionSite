import './videoSection.scss'
import Media from 'react-media';
import gif from './gif_large.gif'
import mobileGif from './gif-mobile2.gif'

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
                    <img className="section1__video" alt='Загрузка'  src={mobileGif}/>
                    <div className="section1__video__container"></div>
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
                    <img className="section1__video"  alt='Загрузка' src={gif}/>
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