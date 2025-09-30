import './App.css'
import { Contact } from './components/Contact'
import { Curriculum } from './components/Curriculum'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Introduction } from './components/Introduction'
import { Mentors } from './components/Mentors'
import { Portfolio } from './components/Portfolio'
import { Reasons } from './components/Reasons'
import { Registration } from './components/Registration'
import { Testimonials } from './components/Testimonials'

function App() {

  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <Introduction />
        <Reasons />
        <Curriculum />
        <Portfolio />
        <Mentors />
        <Testimonials />
        <Contact />
        <Registration />
      </main>
      <Footer />
    </div>
  )
}

export default App
