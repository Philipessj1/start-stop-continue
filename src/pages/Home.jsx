import React from 'react';
import { boneco, boneco2, icon1, icon2, icon3, icon4 } from '../assets';

const Home = () => {
  return (
    <main className='flex w-full max-w-7xl flex-col gap-10'>
      <section className='flex sm:flex-row flex-col w-full max-w-7xl justify-between sm:px-[9rem] items-center sm:items-start gap-8 sm:gap-0'>
      <div className='text-white flex flex-col gap-2'>
        <h1 className='font-bold text-[2rem] sm:text-[2.5rem]'>
          <span className='text-[#BEA0FF]'>Como começar</span>, o que <br></br> parar de fazer e o que <br></br> continuar?
        </h1>
        <p className='text-[1rem] sm:text-[1.2rem]'>
          Uma relação entre dinheiro e <br></br> aspectos emocionais.
        </p>
      </div>
      <img
        src={ boneco } 
        alt="boneco"
        className='max-h-[350px]'
      />
    </section>
    <section className='flex sm:flex-row flex-col w-full max-w-7xl justify-between sm:px-[9rem] items-center sm:items-start gap-8 sm:gap-0'>
      <div className='text-white flex flex-col gap-5'>
        <div>
          <h1 className='font-bold text-[2rem] sm:text-[2.5rem]'>
            Ementa
          </h1>
          <h2 className='font-bold text-[1rem] sm:text-[1.1rem]'>
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
              2,000 +
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
    </main>
  )
}

export default Home