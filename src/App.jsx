import { useState } from 'react';
import Home from './pages/Home';
import { notebook, light } from '../src/assets/index';
import './App.css'

function App() {

  return (
    <>
      <div className='h-[screen] flex flex-col w-full justify-center items-center'>
        <header className='w-full flex justify-center py-3 mb-8'>
          <nav className='flex max-w-7xl justify-around items-center w-full text-white'>
            <a href='/' className='flex items-center justify-center w-full'>
              <img 
                src={ notebook } 
                alt=""
                className='h-7 mr-2'
              />
              <h1 className='font-bold text-[#D9ECFF] text-[1.2rem] leading-none sm:text-[1.5rem]'>
                Start Stop <br></br>Continue
              </h1>
            </a>
           <div className='flex justify-around w-full text-sm sm:text-base max-w-[260px]'>
            <a href="/">
                Início
              </a>
              <a href="/">
                Sobre
              </a>
              <a href="/">
                Curso
              </a>
           </div>
           <div className='w-full justify-center items-center text-sm sm:text-xs hidden sm:flex'>
            <button className='border py-1.5 w-[100px] rounded-3xl mr-4'>
              Login
            </button>
            <button className='bg-[#7F56D9] py-1.5 w-[100px] rounded-3xl'>
              Inscreva-se
            </button>
           </div>
          </nav>
        </header>
        <Home />
        
      </div>
    </>
  )
}

export default App
