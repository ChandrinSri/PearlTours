import Contact from './Contact'
import About from './About'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import TourDetail from './TourDetail'
import { tours } from './data'
import './site.css'

const tour = tours.find(item => location.pathname.endsWith(`/tours/${item.slug}.html`))
const pages = { 'about.html': <About />, 'contact.html': <Contact /> }
const page = location.pathname.endsWith('/contact.html') ? pages['contact.html']
  : location.pathname.endsWith('/about.html') ? pages['about.html'] : <Home />
createRoot(document.getElementById('root')!).render(tour ? <TourDetail tour={tour} /> : page)
