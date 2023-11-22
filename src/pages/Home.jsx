import React from 'react';
import { notebook, boneco, boneco2, feedback, icon1, icon2, icon3, icon4, pessoas, phone, local, email, social } from '../assets';
import './Home.css';

const Home = () => {
  return (
    <main className='flex w-full max-w-7xl flex-col gap-10'>
      <section className='flex md:flex-row flex-col w-full max-w-7xl justify-between md:px-[9rem] items-center md:items-start gap-8 md:gap-0'>
      <div className='text-white flex flex-col gap-2'>
        <h1 className='font-bold text-[2rem] md:text-[2.5rem]'>
          <span className='text-[#BEA0FF]'>Como começar</span>, o que <br></br> parar de fazer e o que <br></br> continuar?
        </h1>
        <p className='text-[1rem] md:text-[1.2rem]'>
          Uma relação entre dinheiro e <br></br> aspectos emocionais.
        </p>
      </div>
      <img
        src={ boneco } 
        alt="boneco"
        className='max-h-[350px]'
      />
    </section>
    <section id='sobre' className='flex md:flex-row flex-col w-full max-w-7xl justify-between md:px-[9rem] items-center md:items-start gap-8 md:gap-0'>
      <div className='text-white flex flex-col gap-5'>
        <div>
          <h1 className='font-bold text-[2rem] md:text-[2.5rem]'>
            Ementa
          </h1>
          <h2 className='font-bold text-[1rem] md:text-[1.1rem]'>
            Psicologia Financeira
          </h2>
        </div>
        <div className='flex flex-col gap-3 max-w-[300px] text-[#B0B0D1]'>
          <p className='text-[0.8rem]'>
            Capacitar pessoas a desenvolver uma compreenção sobre a interação entre as emoções e as finanças, bem como o impacto das escolhas monetárias.
          </p>
          <p className='text-[0.8rem]'>
            Público Alvo: Jovens Adultos ou qualquer pessoa/profissional que busca controlar melhor seu dinheiro e entender o seu comportamento psicologico sobre o tema financeiro.
          </p>
          <button className='hover:font-semibold hover:bg-transparent hover:text-[#7F56D9] hover:border hover:border-[#7F56D9] bg-[#7F56D9] py-1.5 w-[100px] rounded-3xl text-xs mt-2 text-white'>
              Saiba Mais
          </button>
        </div>
      </div>
      <img
        src={ boneco2 } 
        alt="boneco"
        className='max-h-[350px]'
      />
      <div className='text-white flex flex-col justify-around h-[330px]'>
        <div className='flex gap-3 items-center'>
          <img
            src={ icon1 } 
            alt="icon"
            className='h-[40px]'
          />
          <div className='flex flex-col'>
            <h3 className='font-bold text-[1.2rem] leading-5'>
              Certificado
            </h3>
            <p className='text-[0.8rem] text-[#B0B0D1]'>
              Conclusão
            </p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <img
            src={ icon2 } 
            alt="icon"
            className='h-[40px]'
          />
          <div className='flex flex-col'>
            <h3 className='font-bold text-[1.2rem] leading-5'>
              2.000 +
            </h3>
            <p className='text-[0.8rem] text-[#B0B0D1]'>
              Estudantes
            </p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <img
            src={ icon3 } 
            alt="icon"
            className='h-[40px]'
          />
          <div className='flex flex-col'>
            <h3 className='font-bold text-[1.2rem] leading-5'>
              Ao Vivo
            </h3>
            <p className='text-[0.8rem] text-[#B0B0D1]'>
              Aulas
            </p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <img
            src={ icon4 } 
            alt="icon"
            className='h-[40px]'
          />
          <div className='flex flex-col'>
            <h3 className='font-bold text-[1.2rem] leading-5'>
              Avaliação
            </h3>
            <p className='text-[0.8rem] text-[#B0B0D1]'>
              Provas
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className='flex flex-col w-full max-w-7xl justify-between md:px-[9rem] items-center gap-8 md:gap-12'>
      <h1 className='font-bold text-[2rem] md:text-[2.5rem] text-white text-center'>
        Feedback
      </h1>
      <div className='flex md:flex-row flex-col items-center gap-0 md:gap-[14rem]'>
        <img 
          src={ feedback }
          alt=""
          className='md:w-[500px] w-[90vw]'
        />
        <img 
          src={ pessoas }
          alt=""
          className='hidden lg:block lg:w-[183.8px] lg:h-[210px]'
        />
      </div>
    </section>
    <section className='flex flex-col w-full max-w-7xl md:px-[9rem] items-center gap-5 md:gap-4 gradiente px-5'>
      <div className='flex items-center w-full pt-10'>
        <img 
          src={ notebook } 
          alt=""
          className='h-7 mr-2'
        />
        <h1 className='font-bold text-[#D9ECFF] text-[1.2rem] leading-none md:text-[1.5rem]'>
          Start Stop <br></br>Continue
        </h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between w-full gap-5 md:gap-0'>
        <p className='text-[#B0B0D1] text-[0.6rem] pt-3'>
          Como começar, o que parar de fazer e como continuar? <br></br> Uma relação entre dinheiro e aspectos emocionais.
        </p>
        <div className='flex flex-col gap-3'>
          <h3 className='font-bold text-[1rem] text-white'>
            Fale Conosco
          </h3>
          <div className='flex gap-3'>
            <div className='flex gap-2 items-center'>
              <img 
                src={ phone }
                alt=""
                className='h-[10px]'
              />
              <p className='text-[#B0B0D1] text-[0.6rem]'>
                (21) 3882-9797
              </p>
            </div>
            <div className='flex gap-2 items-center'>
              <img 
                src={ local }
                alt=""
                className='h-[10px]'
              />
              <p className='text-[#B0B0D1] text-[0.6rem]'>
                Av.Paris - Bonsucesso, Rio de <br></br> Janeiro RJ - 21041-020
              </p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
              <img 
                src={ email }
                alt=""
                className='h-[10px]'
              />
              <p className='text-[#B0B0D1] text-[0.6rem]'>
                bgimmr.uni@unisuam.com
              </p>
            </div>
        </div>
      </div>
      <div className='h-[1px] w-full bg-[#dadaf732] my-5'></div>
      <div className='flex w-full justify-between pb-5'>
        <p className='text-[#B0B0D1] text-[0.6rem]'>
        Copyright 2023 | All Rights Reserved
        </p>
        <img 
          src={ social }
          alt=""
          className='h-[12px]'
        />
      </div>
    </section>
    </main>
  )
}

export default Home