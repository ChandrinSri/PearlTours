import Experiences from './Experiences'
import Tours from './Tours'
import Contact from './Contact'
import About from './About'
import { createRoot } from 'react-dom/client'
import Home from './Home'
import TourDetail from './TourDetail'
import { tours } from './data'
import './site.css'

const tour = tours.find(item => location.pathname.endsWith(`/tours/${item.slug}.html`))
const pages: Record<string, React.ReactNode> = {
  'experiences.html': <Experiences />,
  'about.html': <About />,
  'contact.html': <Contact />,
  'tours.html': <Tours />,
}
const page = pages[location.pathname.split('/').pop() ?? ''] ?? <Home />
createRoot(document.getElementById('root')!).render(tour ? <TourDetail tour={tour} /> : page)
