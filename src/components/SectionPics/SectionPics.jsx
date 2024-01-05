import './sectioPics.scss'
import diamond from './diamond.webp'
import lion from './lion.webp'
import twig from './twig.webp'
import coins from './coins.png'

export const SectionPics = () => {
  return (
    <div className='sectionPics__main__container'>
      <section className='sectionPics'>
        <div className='sectionPics__wrapper'>
          <div className='sectionPics__img__wrapper'>
            <img className='sectionPics__img' alt='Logo' src={diamond}/>
          </div>
            <h2 className='sectionPics__text_header'>Навыки <br></br> для Жизни: </h2>
          <div className='sectionPics__text__container'>
            <p >Мы готовим вас не только к успеху в МЛМ, но и к величию в любом начинании.</p>
          </div>
        </div>
        <div className='sectionPics__wrapper'>
          <div className='sectionPics__img__wrapper'>
            <img className='sectionPics__img' alt='Logo' src={lion}/>
          </div>
            <h2 className='sectionPics__text_header'>Сеть, <br></br> Которая Работает:</h2>
          <div className='sectionPics__text__container'>
            <p>В Dandelion вы подключаетесь к сообществу амбициозных профессионалов, которые питают ваш рост.</p>
          </div>
        </div>
        <div className='sectionPics__wrapper'>
          <div className='sectionPics__img__wrapper'>
            <img className='sectionPics__img' alt='Logo' src={twig}/>
          </div>
            <h2 className='sectionPics__text_header'>Динамика <br></br> Лидерства:</h2>
          <div className='sectionPics__text__container'>
            <p>Забудьте обыденность – с Dandelion вы становитесь пионерами в мире МЛМ.</p>
          </div>
        </div>
        <div className='sectionPics__wrapper'>
          <div className='sectionPics__img__wrapper'>
            <img className='sectionPics__img' alt='Logo' src={coins}/>
          </div>
            <h2 className='sectionPics__text_header'>Мастерство и <br></br> Вдохновение:</h2>
          <div className='sectionPics__text__container'>
            <p>Ваш путь в Dandelion – это не просто карьера, это миссия, полная вдохновения и достижений.</p>
          </div>
        </div>
      </section>
      <span className='motivation__golden__line'></span>
    </div>
  )
}