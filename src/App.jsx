import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App