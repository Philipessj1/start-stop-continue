import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { notebook, light, burger } from '../src/assets/index';
import './App.css'
import Curso from './pages/Curso';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <Router>
      <div className='flex flex-col w-full justify-center items-center'>
        <header className='w-full flex justify-center py-3 mb-8'>
          <nav className='flex max-w-7xl justify-around items-center w-full text-white'>
            <Link to={'/'} className='flex items-center justify-center w-full'>
              <img 
                src={ notebook } 
                alt=""
                className='h-7 mr-2'
              />
              <h1 className='font-bold text-[#D9ECFF] text-[1.2rem] leading-none sm:text-[1.5rem]'>
                Start Stop <br></br>Continue
              </h1>
            </Link>
           <div className='flex justify-around w-full text-sm sm:text-base max-w-[260px]'>
              <Link to={'/'}>
                Início
              </Link>
              <Link to={'/'}>
                Sobre
              </Link>
              <Link to={'/curso'}>
                Curso
              </Link>
           </div>
           <Link to={'/login'} className='px-1'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" className='sm:hidden fill-[#fff]'><path d="M232.001-253.077q59.923-41.307 119.23-64.038Q410.539-339.846 480-339.846q69.461 0 129.077 22.731 59.615 22.731 119.538 64.038 43.615-50.538 64.807-106.725Q814.615-415.989 814.615-480q0-141.538-96.538-238.077Q621.538-814.615 480-814.615t-238.077 96.538Q145.385-621.538 145.385-480q0 64.011 21.5 120.198t65.116 106.725Zm247.782-204.231q-53.937 0-90.744-37.025-36.808-37.024-36.808-90.961 0-53.936 37.025-90.744 37.024-36.807 90.961-36.807t90.744 37.024q36.808 37.024 36.808 90.961t-37.025 90.744q-37.024 36.808-90.961 36.808Zm.685 357.307q-79.006 0-148.242-29.77-69.235-29.769-120.961-81.576-51.725-51.808-81.494-120.727-29.77-68.92-29.77-148t29.77-147.925q29.769-68.846 81.576-120.654 51.808-51.807 120.727-81.576 68.92-29.77 148-29.77t147.925 29.77q68.846 29.769 120.654 81.576 51.807 51.808 81.576 120.686 29.77 68.878 29.77 147.499 0 79.006-29.77 148.242-29.769 69.235-81.576 120.961-51.808 51.725-120.686 81.494-68.878 29.77-147.499 29.77ZM480-145.385q55.769 0 110-17.731t102.154-57.346q-47.923-35.231-101.5-54.616Q537.077-294.462 480-294.462T369.154-275.27q-53.77 19.192-100.923 54.808Q315.769-180.847 370-163.116q54.231 17.731 110 17.731Zm.054-357.307q35.869 0 59.1-23.284 23.231-23.285 23.231-59.154 0-35.87-23.285-59.101-23.284-23.231-59.154-23.231-35.869 0-59.1 23.285-23.231 23.284-23.231 59.154 0 35.869 23.285 59.1 23.284 23.231 59.154 23.231ZM480-585.077Zm0 365.153Z"/></svg>
          </Link>
           <div className='w-full justify-center items-center text-sm sm:text-xs hidden sm:flex'>
            <Link to={'/login'}>
              <button className='hover:font-semibold hover:bg-white hover:text-black hover:border-none border py-1.5 w-[100px] rounded-3xl mr-4'>
                Login
              </button>
            </Link>
            <Link to={'/register'}>
              <button className='hover:font-semibold hover:bg-transparent hover:text-[#7F56D9] hover:border hover:border-[#7F56D9] bg-[#7F56D9] py-1.5 w-[100px] rounded-3xl'>
                Inscreva-se
              </button>
            </Link>
           </div>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/curso' element={ <Curso /> }/>
          <Route path='/login' element={ <Login /> }/>
          <Route path='/register' element={ <Register /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
