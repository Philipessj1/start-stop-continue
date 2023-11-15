import { useState } from 'react';
import Home from './pages/Home';
import { notebook, light, burger } from '../src/assets/index';
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col w-full justify-center items-center'>
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
           <a href="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="60" className='sm:hidden fill-[#B0B0D1] mx-4'><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>
           </a>
           <div className='w-full justify-center items-center text-sm sm:text-xs hidden sm:flex'>
            <button className='hover:font-semibold hover:bg-white hover:text-black hover:border-none border py-1.5 w-[100px] rounded-3xl mr-4'>
              Login
            </button>
            <button className='hover:font-semibold hover:bg-transparent hover:text-[#7F56D9] hover:border hover:border-[#7F56D9] bg-[#7F56D9] py-1.5 w-[100px] rounded-3xl'>
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
