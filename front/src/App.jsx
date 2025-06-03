import {Route, Routes } from 'react-router-dom'
import { Dashboard } from './components/templates/Dashboard/DashboardLayout'
import {Layout} from './components/templates/Layout'
import { ProductFinished } from './components/templates/Product/ProductLayout'
import { RawMaterials } from './components/templates/Material/MaterialsLayout'
import {FinanceStatement} from './components/templates/Finance/FinanceLayout'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path='Raw-materials' element={<RawMaterials />} />
        <Route path='Product-finished' element={<ProductFinished />} />
        <Route path='Financial-statement' element={<FinanceStatement />} />
      </Route>
    </Routes>
      </>
  )
}

export default App
