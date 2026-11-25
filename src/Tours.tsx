import { useState } from 'react'
import Footer from './Footer'
import TourGrid from './TourGrid'
import { tours } from './data'

export default function Tours() {
  const [interest, setInterest] = useState('')
  const [duration, setDuration] = useState('')
  const matches = tours.filter(tour =>
    (!interest || tour.category === interest) && (!duration || tour.duration === duration)
  )
  return <>
    <header className="about-header">
      <a href="index.html">Pearl Tours</a>
      <nav aria-label="Main navigation"><a href="tours.html" aria-current="page">Our tours</a> <a href="about.html">About us</a> <a href="contact.html">Contact us</a></nav>
    </header>
    <main className="tour-catalogue">
      <h1>Sri Lanka tours</h1>
      <div className="tour-filters">
        <label>Interest <select value={interest} onChange={event => setInterest(event.target.value)}>
          <option value="">All interests</option>
          {[...new Set(tours.map(tour => tour.category))].map(value => <option key={value}>{value}</option>)}
        </select></label>
        <label>Duration <select value={duration} onChange={event => setDuration(event.target.value)}>
          <option value="">Any duration</option>
          {[...new Set(tours.map(tour => tour.duration))].map(value => <option key={value}>{value}</option>)}
        </select></label>
      </div>
      <p role="status">{matches.length ? matches.length + (matches.length === 1 ? ' tour' : ' tours') : 'No tours match. Try another interest or duration.'}</p>
      <TourGrid tours={matches} />
    </main>
    <Footer />
  </>
}
