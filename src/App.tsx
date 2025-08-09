import './App.css'
import BlogSection from './components/BlogSection'
import FaqSection from './components/FaqSection'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import NewsletterSection from './components/NewsletterSection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FaqSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </>
  )
}

export default App
