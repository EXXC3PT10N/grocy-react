import './App.css'
import { Outlet } from 'react-router'
import Navigation from './components/Navigation';



function App() {


  return (
    <>
      <div className='container dark'>
        <Navigation />

        <main style={{ padding: '1rem' }}>
          <Outlet />
        </main>
      </div>

    </>
  )
}

export default App
