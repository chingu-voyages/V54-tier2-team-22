import { Routes, Route } from 'react-router-dom'
import Signup from './views/Sign-up'
import Signin from './views/Sign-in'
import { Home } from './views/Home'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
