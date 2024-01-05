import './sectionMotivation.scss'
import { forwardRef } from "react";


export const SectionMotivation = forwardRef((props, ref) => {
  return(
    <section ref={ref}  className='motivation'>
      
      <div  className='motivation__text__wrapper'>
          <h1 className='motivation__text__header'>Осмельтесь на большее:</h1>
          <h1 className='motivation__text__header'>Преобразите свои амбиции в реальность с нами!</h1>
          <p>Присоединяйтесь к DANDELION: где амбиции встречают реальность.</p>
          <p>Здесь вы не просто занимаетесь бизнесом –</p>
          <p className='motivation__text__emph'><b>ВЫ СОЗДАЕТЕ ИМПЕРИЮ!</b></p>
          <p>С нами вы строите международную карьеру без границ, руководите командой и доверяете своему продукту.</p>
          <p> Нет ограничений, нет пределов – только ваша целеустремленность и наша поддержка.</p>
          <h2 className='motivation__text__emph'>Заработайте свободу и успех, где бы вы ни были.</h2>
      </div>
      <span className='motivation__golden__line'></span>

        </section>
  )
}
)