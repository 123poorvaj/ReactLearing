import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import Contact from '../Components/Contact'
import NavBar from '../components/NavBar'

function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}
export default App
