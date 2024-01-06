import './sectionForm.scss'
import { Logo } from '../Logo/Logo'
import { forwardRef } from "react";
import cn from 'classnames'
import { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { useForm, } from "react-hook-form";
import { addNewUSer } from '../../utils/api';



export const SectionForm = forwardRef(({glow, users, setUsers, setGlow}, ref) => {

useEffect(()=>{
  if (glow)
    setTimeout(()=>{
      setGlow(false)
    }, 1900)
}, [glow, setGlow])

const [progress, setProgress] = useState(false)
const [dataSent, setDataSent] = useState(false)
const [disableBtn, setDisableButton] = useState(false)
const [seconds, setSeconds] = useState(10);
const [timer, setTimer] = useState(false);

const {register, handleSubmit, formState: { errors }} = useForm();


const nameRegister = register("name", {
  required: 'Введите имя',
  maxLength: {
    value:25,
    message:
    "Ваше ммя слишком длинное, оно не должно быть длинее 25 знаков",
    }
  }
);


const phoneRegister = register("phone", {
  required: "Введите номер телефона",
  pattern: {
    message:
    "Некорректный номер!",
    value: /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/
    
  }
});

const emailRegiter = register("email", {
  required: "Введите email",
  pattern: {
    message:
    "Некорректный email!",
    value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
  }
});




const sendUserData = async (data) => {
  try {
    await addNewUSer(data).then((res) => setUsers([...users, res]));
    setProgress(true);
    setDataSent(true);
    setTimer(!timer);
    if (seconds === 0) setSeconds(10)
  }
  
  catch (err) { console.log(err)}
}

useEffect(()=>{
  if (progress)
    setTimeout(()=>{
      setProgress(false)
    }, 10000)
}, [progress])

useEffect(()=>{
  if (dataSent) 
  setDisableButton(true)
  else setDisableButton(false)
}, [dataSent])

useEffect(()=>{
  if (disableBtn)
  setTimeout(()=>{
    setDisableButton(false)}, 10000)
}, [disableBtn])

useEffect(()=>{ 
  if (dataSent)
  setTimeout(()=>{
  setDataSent(false)}, 10000)
}, [dataSent])

useEffect(() => {
  if (seconds > 0 && timer) {
    setTimeout(setSeconds, 1000, seconds - 1);
  } else {
    setTimer(false);
  }
}, [ seconds, timer ]);


  return(
    <section   className='sectionForm__container'>
      
      <div className='sectionForm__left'>
        <div className='sectionForm__left__text'>
          <span className='sectionForm__left__header'>Действуйте смело!</span>
          <div className='sectionForm__left__par__wrapper'>
            <span className='sectionForm__left__par'>Присоединяйтесь к Dandelion сейчас!</span>
            <span className='sectionForm__left__par'>Начните свой путь к величию. </span>
            <span className='sectionForm__left__par'>Ни минуты терять!</span>
          </div>
        </div>
        <div ref={ref}  className='sectionForm__left__logo'>
          <Logo></Logo>
        </div>
      </div>
      
      
      
      <div  className={cn("sectionForm__form__wrapper", { ["sectionForm__form__wrapper_GLOW"]: glow })}>
        <div className='sectionForm__form__text__wrapper'>
          <span  className='sectionForm__left__header'>Хочу присоединиться</span>
          <span className='sectionForm__left__par'>Оставь свои данные, и мы обязательно с тобой свяжемся!</span>
        </div>
        <form 
        onSubmit={handleSubmit(sendUserData)} 
        className='sectionForm__form'>
          <div className='sectionForm__form__inputs'>
              <input
                type="text"
                placeholder="Введите имя"
                className='sectionForm__form__input'
                {...nameRegister}
              />
              { errors?.name  &&
                  <small  >{errors.name?.message}</small>
              }
              <input 
                type="text"
              
                className='sectionForm__form__input'
                {...phoneRegister}
                placeholder="Введите номер телефона"
              />
              { errors?.phone  &&
                  <small  >{errors.phone?.message}</small>
              }
              <input 
                type="text"
                placeholder="Введите email"
                className='sectionForm__form__input'
                {...emailRegiter}
              />
              { errors?.email  &&
                  <small  >{errors.email?.message}</small>
              }
          </div>
        
          <div className='sectionForm__form__btn__wrpapper'>
              <span >{dataSent && 'Спасибо, ваши данные получены'}</span>
              <span>{timer  && `Повторная отправка данных возможна через ${seconds} с`}</span>
            <button disabled={timer} className={cn("sectionForm__form__btn", { ["sectionForm__form__btn_Disabled"]: timer })}  type='submit'>{!timer ? "Отправить" : "Пожалуйста, подождите"}</button>
          </div>
            {progress && <LinearProgress color="inherit"/> }
          
        </form>
      </div>
    </section>
  )
}
) 