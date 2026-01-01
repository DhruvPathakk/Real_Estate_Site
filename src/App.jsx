import React from 'react'
import Header from './componenst/Header'
import About from './componenst/About'
import Projects from './componenst/Projects'
import Testimonials from './componenst/Testimonials'
import Contact from './componenst/Contact'
import Footer from './componenst/footer'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  )
}

export default App