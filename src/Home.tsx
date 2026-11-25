import TourGrid from './TourGrid'
import Footer from './Footer'
import Hero from './Hero'
import { experiences, tours } from './data'

function WhyPearl() {
  return <section className="why" aria-labelledby="why-pearl">
    <h2 id="why-pearl">Why Pearl Tours?</h2>
    <p>Your trip starts with a conversation in Australia. Tell us what you’d love to see, and we’ll help you choose an itinerary from our travel partners in Sri Lanka. From there, we can talk through the experiences you’d like to add along the way.</p>
  </section>
}

function FeaturedTours() {
  return <section id="featured">
    <h2>Featured tours</h2>
    <TourGrid tours={tours.filter(tour => ['eco', 'cultural', 'adventure'].includes(tour.slug))} />
    <a href="tours.html">Browse all tours →</a>
  </section>
}

function Interests() {
  const categories = [...new Set(tours.map(tour => tour.category))]
  return <section id="tours"><h2>Explore by interest</h2>
    {categories.map(category => <details key={category}>
      <summary>{category}</summary>
      {tours.filter(tour => tour.category === category).map(tour =>
        <p key={tour.slug}><a href={`tours/${tour.slug}.html`}>{tour.title}</a> · {tour.duration}</p>
      )}
    </details>)}
  </section>
}

function Experiences() {
  return <section id="experiences" aria-labelledby="experience-title">
    <h2 id="experience-title">Experiences to add to your trip</h2>
    <div className="tour-grid">{experiences.map(item =>
      <article key={item.title}>
        <img loading="lazy" src={item.image} alt="" /><p>{item.duration}</p>
        <h3>{item.title}</h3><p>{item.summary}</p>
      </article>
    )}</div>
  </section>
}

export default function Home() {
  return (
    <>
      <main><Hero /><WhyPearl /><FeaturedTours /><Interests /><Experiences /></main>
      <Footer />
    </>
  )
}

