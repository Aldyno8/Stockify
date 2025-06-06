import {Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/templates/Dashboard/DashboardLayout'
import {Layout} from './components/templates/Layout'
import { Product } from './components/templates/Product/ProductLayout'
import {FinanceStatement} from './components/templates/Finance/FinanceLayout'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='Product' element={<Product />} />
        <Route path='Financial-statement' element={<FinanceStatement />} />
      </Route>
    </Routes>
      </>
  )
}

export default App
