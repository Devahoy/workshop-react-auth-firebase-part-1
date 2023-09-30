import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'
import Dashbaord from './pages/dashboard'

const elements = createRoutesFromElements(
  <>
    <Route path="/" element={<p>Home!!!</p>} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
    <Route path="dashboard" element={<Dashbaord />} />
  </>
)

const router = createBrowserRouter(elements)

export default router
