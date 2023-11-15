import React from 'react';
import { boneco } from '../assets';

const Home = () => {
  return (
    <div className='flex sm:flex-row flex-col w-full max-w-7xl justify-around items-center sm:items-start gap-8 sm:gap-0'>
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
    </div>
  )
}

export default Home