import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const Login = () => {
  return (
    <main className='flex w-full max-w-7xl flex-col gap-10 items-center pb-5'>
      <div className='flex w-full justify-center items-center'>
        <div className='h-[3px] w-[calc(35%-96px)] bg-white'></div>
          <svg xmlns="http://www.w3.org/2000/svg" height="96" viewBox="0 -960 960 960" width="96" className='fill-white'><path d="M232.001-253.077q59.923-41.307 119.23-64.038Q410.539-339.846 480-339.846q69.461 0 129.077 22.731 59.615 22.731 119.538 64.038 43.615-50.538 64.807-106.725Q814.615-415.989 814.615-480q0-141.538-96.538-238.077Q621.538-814.615 480-814.615t-238.077 96.538Q145.385-621.538 145.385-480q0 64.011 21.5 120.198t65.116 106.725Zm247.782-204.231q-53.937 0-90.744-37.025-36.808-37.024-36.808-90.961 0-53.936 37.025-90.744 37.024-36.807 90.961-36.807t90.744 37.024q36.808 37.024 36.808 90.961t-37.025 90.744q-37.024 36.808-90.961 36.808Zm.685 357.307q-79.006 0-148.242-29.77-69.235-29.769-120.961-81.576-51.725-51.808-81.494-120.727-29.77-68.92-29.77-148t29.77-147.925q29.769-68.846 81.576-120.654 51.808-51.807 120.727-81.576 68.92-29.77 148-29.77t147.925 29.77q68.846 29.769 120.654 81.576 51.807 51.808 81.576 120.686 29.77 68.878 29.77 147.499 0 79.006-29.77 148.242-29.769 69.235-81.576 120.961-51.808 51.725-120.686 81.494-68.878 29.77-147.499 29.77ZM480-145.385q55.769 0 110-17.731t102.154-57.346q-47.923-35.231-101.5-54.616Q537.077-294.462 480-294.462T369.154-275.27q-53.77 19.192-100.923 54.808Q315.769-180.847 370-163.116q54.231 17.731 110 17.731Zm.054-357.307q35.869 0 59.1-23.284 23.231-23.285 23.231-59.154 0-35.87-23.285-59.101-23.284-23.231-59.154-23.231-35.869 0-59.1 23.285-23.231 23.284-23.231 59.154 0 35.869 23.285 59.1 23.284 23.231 59.154 23.231ZM480-585.077Zm0 365.153Z"/></svg>
          <div className='h-[3px] w-[calc(35%-96px)] bg-white'></div>
      </div>

      <div className='bg-white p-8 rounded-md flex flex-col gap-5'>
        <div className='flex gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" className='fill-[#7F56D9]'><path d="M676-443H181q-16 0-26.5-10.5T144-480q0-15 10.5-25.5T181-516h495L454-738q-11-11-11-26t11-26q10-11 25.5-11t26.5 11l285 285q5 5 8 11.5t3 13.5q0 8-3 14.5t-8 11.5L507-170q-12 11-27 11t-25-11q-11-11-11-26t11-26l221-221Z"/></svg>
          <div className='flex flex-col'>
            <p className='text-[0.8rem] text-gray-400'>
              Já tem um Conta?
            </p>
            <h1 className='text-[#7F56D9] font-bold font-inter text-[1.2rem]'>
              Faça seu Login
            </h1>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#7F56D9] focus:border-[#7F56D9] outline-none block w-full p-3"
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
          />
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#7F56D9] focus:border-[#7F56D9] outline-none block w-full p-3"
            type='password'
            id='password'
            name='password'
            placeholder='Senha'
            required
          />
          <div className='flex items-center gap-2'>
            <input 
              type="checkbox" 
              name="logged" 
              id="logged"
              className='w-4 h-4 rounded accent-[#7F56D9]' 
            />
            <label className='text-[0.7rem] text-gray-400 font-semibold' htmlFor="logged">Manter-me conectado?</label>
          </div>
        </div>
        <button className='bg-[#7F56D9] text-white rounded-lg border-0 py-2 hover:font-semibold hover:bg-transparent hover:text-[#7F56D9] hover:border hover:border-[#7F56D9] hover:text-[0.93rem]'>
          Login
        </button>
        <div className='flex justify-end text-[0.6rem] text-gray-400 font-semibold'>
          <p>Não tem uma conta? <Link to={'/register'} className='text-[#7F56D9] text-[0.65rem]'>Registre-se</Link></p>
        </div>
      </div>
    </main>
  )
}

export default Login