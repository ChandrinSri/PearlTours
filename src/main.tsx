import { createRoot } from 'react-dom/client'
import Home from './Home'
import TourDetail from './TourDetail'
import { tours } from './data'
import './site.css'

const tour = tours.find(item => location.pathname.endsWith(`/tours/${item.slug}.html`))
createRoot(document.getElementById('root')!).render(tour ? <TourDetail tour={tour} /> : <Home />)
