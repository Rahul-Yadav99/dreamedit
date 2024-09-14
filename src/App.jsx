import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='*' element={<h1>Page not found | 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App