import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home.tsx'
import Profile from './screens/Profile.tsx'
import Statistic from './screens/Statistic.tsx'
import Coming from './screens/Coming.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/statistic' element={<Statistic />} />
        <Route path='/comming' element={<Coming />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
