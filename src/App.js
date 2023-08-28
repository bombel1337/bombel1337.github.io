import React from 'react'
import './App.css';
import { Header, About, Services, Experience, Projects, Contact } from './containers'
import { Cursor } from 'custom-pointer-react' //https://harshhhdev.github.io/custom-pointer-react/



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
  color="#212121"
  ringSize={47}
  cursorSize={8}
  ringBorder={1}
/>
    </div>
  )
}

export default App