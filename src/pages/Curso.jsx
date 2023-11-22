import React from 'react';
import { img1, img2, img3, img4, img5 } from '../assets';

const Curso = () => {
  return (
    <main className='flex w-full max-w-7xl flex-col gap-10 items-center pb-5'>
      <div className='flex flex-col items-center'>
        <h1 className='text-white py-1 leading-7 font-bold text-[2rem] md:text-[2.5rem]'>
          Aulas
        </h1>
        <div className='h-[1px] bg-white w-[80%]'></div>
      </div>
      <div className='flex flex-col gap-4 md:flex-row'>
        <div>
          <img 
            src={ img1 } 
            alt=""
            className='h-[180px] rounded-t-md'
          />
          <div className='bg-white p-3 w-[270px] rounded-b-md'>
            <p className='flex items-center gap-1 font-inter text-[0.6rem] font-semibold text-gray-400'>
              <span className='flex items-center gap-1 text-[#7F56D9] font-inter text-[0.7rem] font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15" className='fill-[#7F56D9]'><path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> 10 Jan, 2024</span>
              <span className='text-[0.6rem]'>|</span> Módulo 1
            </p>
            <div className='flex flex-col justify-start h-[163.81px]'>
              <h1 className='text-[1.5rem] font-bold font-inter'>
                Introdução
              </h1>
              <h2 className='text-gray-500 w-full leading-5 font-semibold font-inter text-[0.8rem]'>
                1.1 - Crenças Limitantes <br></br>
                1.2 - Como o histórico familiar influencia o relacionamento com  o dinheiro
              </h2>
            </div>
           <div className='flex justify-end'>
            <button className='text-[0.8rem] text-white bg-[#7F56D9] border-0 rounded-full py-1 px-4 m-2 hover:text-[#7F56D9] hover:border-[#7F56D9] hover:border hover:bg-transparent hover:font-semibold hover:text-[0.71rem]'>
                Assistir
            </button>
           </div>
          </div>
        </div>

        <div>
          <img 
            src={ img2 } 
            alt=""
            className='h-[180px] rounded-t-md'
          />
          <div className='bg-white p-3 w-[270px] h-[255px] rounded-b-md'>
            <p className='flex items-center gap-1 font-inter text-[0.6rem] font-semibold text-gray-400'>
              <span className='flex items-center gap-1 text-[#7F56D9] font-inter text-[0.7rem] font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15" className='fill-[#7F56D9]'><path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> 17 Jan, 2024</span>
              <span className='text-[0.6rem]'>|</span> Módulo 2
            </p>
            <h1 className='text-[1.5rem] py-1 leading-7 font-bold font-inter'>
              Principais teorias sobre emoções
            </h1>
            <h2 className='text-gray-500 w-full leading-5 font-semibold font-inter text-[0.8rem]'>
              2.1 - O Impacto das emoções no processo de tomada de decisão<br></br>
              2.2 - Relação entre dinheiro e felicidade <br></br>
              2.3 - Vieses cognitivos que influenciam as escolhas finaceiras
            </h2>
           <div className='flex justify-end'>
            <button className='text-[0.8rem] text-white bg-[#7F56D9] border-0 rounded-full py-1 px-4 m-2 hover:text-[#7F56D9] hover:border-[#7F56D9] hover:border hover:bg-transparent hover:font-semibold hover:text-[0.71rem]'>
                Assistir
            </button>
           </div>
          </div>
        </div>

        <div>
          <img 
            src={ img3 } 
            alt=""
            className='h-[180px] rounded-t-md'
          />
          <div className='bg-white p-3 w-[270px] rounded-b-md'>
            <p className='flex items-center gap-1 font-inter text-[0.6rem] font-semibold text-gray-400'>
              <span className='flex items-center gap-1 text-[#7F56D9] font-inter text-[0.7rem] font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15" className='fill-[#7F56D9]'><path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> 24 Jan, 2024</span>
              <span className='text-[0.6rem]'>|</span> Módulo 3
            </p>
            <div className='flex flex-col justify-start h-[163.81px]'>
              <h1 className='text-[1.5rem] font-bold leading-7 pb-1 font-inter'>
                Sociedade do Consumo
              </h1>
              <h2 className='text-gray-500 w-full leading-5 font-semibold font-inter text-[0.8rem]'>
                3.1 - "Compreendendo nossos comportamentos de consumo
              </h2>
            </div>
           <div className='flex justify-end'>
            <button className='text-[0.8rem] text-white bg-[#7F56D9] border-0 rounded-full py-1 px-4 m-2 hover:text-[#7F56D9] hover:border-[#7F56D9] hover:border hover:bg-transparent hover:font-semibold hover:text-[0.71rem]'>
                Assistir
            </button>
           </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 md:flex-row'>
        <div>
          <img 
            src={ img4 } 
            alt=""
            className='h-[180px] rounded-t-md'
          />
          <div className='bg-white p-3 w-[270px] rounded-b-md'>
            <p className='flex items-center gap-1 font-inter text-[0.6rem] font-semibold text-gray-400'>
              <span className='flex items-center gap-1 text-[#7F56D9] font-inter text-[0.7rem] font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15" className='fill-[#7F56D9]'><path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> 1 Fev, 2024</span>
              <span className='text-[0.6rem]'>|</span> Módulo 4
            </p>
            <div className='flex flex-col justify-start h-[163.81px]'>
              <h1 className='text-[1.5rem] font-bold leading-7 pb-1 font-inter'>
                Implicações Psíquicas
              </h1>
              <h2 className='text-gray-500 w-full leading-5 font-semibold font-inter text-[0.8rem]'>
                4.1 - Oneomania "desejo mórbido, impulsivo, de fazer comprar e adquirir coisas"
              </h2>
            </div>
           <div className='flex justify-end'>
            <button className='text-[0.8rem] text-white bg-[#7F56D9] border-0 rounded-full py-1 px-4 m-2 hover:text-[#7F56D9] hover:border-[#7F56D9] hover:border hover:bg-transparent hover:font-semibold hover:text-[0.71rem]'>
                Assistir
            </button>
           </div>
          </div>
        </div>

        <div>
          <img 
            src={ img5 } 
            alt=""
            className='h-[180px] rounded-t-md'
          />
          <div className='bg-white p-3 w-[270px] rounded-b-md'>
            <p className='flex items-center gap-1 font-inter text-[0.6rem] font-semibold text-gray-400'>
              <span className='flex items-center gap-1 text-[#7F56D9] font-inter text-[0.7rem] font-semibold'><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15" className='fill-[#7F56D9]'><path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg> 8 Fev, 2024</span>
              <span className='text-[0.6rem]'>|</span> Módulo 5
            </p>
            <div className='flex flex-col justify-start h-[163.81px]'>
              <h1 className='text-[1.5rem] font-bold leading-7 pb-1 font-inter'>
               Planejamento
              </h1>
              <h2 className='text-gray-500 w-full leading-5 font-semibold font-inter text-[0.8rem]'>
                5.1 Como fazer um planejamento financeiro
              </h2>
            </div>
           <div className='flex justify-end'>
            <button className='text-[0.8rem] text-white bg-[#7F56D9] border-0 rounded-full py-1 px-4 m-2 hover:text-[#7F56D9] hover:border-[#7F56D9] hover:border hover:bg-transparent hover:font-semibold hover:text-[0.71rem]'>
                Assistir
            </button>
           </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Curso