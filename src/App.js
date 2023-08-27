import React from 'react'
import './App.css';
import { Header, About, Services, Experience, Projects, Contact } from './containers'
import { Cursor } from 'custom-pointer-react'



const App = () => {


  return (
  
    <div className='App' >
          <div className='gradient__bg'>
            <Header />
          </div>
          <About/>
          <Services/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Cursor
  showRing={true}
  color="#8c8c8c"
  ringSize={44}
  cursorSize={11}
  ringBorder={2}
/>
    </div>
  )
}

export default App