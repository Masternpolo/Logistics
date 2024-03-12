import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Homepage from './component/Homepage'
import Service from './component/Service'
import Tracking from './component/Tracking'
import Contact from './component/Contact'




import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/Service' element={<Service/>}/>
          <Route exact path='/Tracking' element={<Tracking/>}/>
          <Route exact path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
