import { useEffect, useState } from 'react'
import Footer from './Footer'
import { catalogue } from './experienceCatalogue'

const featured = ['pidurangala-sunrise', 'jeep-safari', 'market-visit-cook']

export function FeaturedExperiences() {
  return <section id="experiences"><h2>Experiences in Sri Lanka</h2>
    <div className="tour-grid">{featured.map(id => {
      const item = catalogue.find(entry => entry.id === id)!
      return <a className="experience-card" href={'experiences.html#' + id} key={id}>
        <img loading="lazy" src={item.image} alt="" />
        <small>{item.category} · {item.duration}</small><h3>{item.title}</h3>
        <p>{item.description}</p>
      </a>
    })}</div><a href="experiences.html">Explore all experiences →</a>
  </section>
}

export default function Experiences() {
  const [category, setCategory] = useState('All')
  const [id, setId] = useState(() => location.hash.slice(1))
  useEffect(() => {
    const update = () => { setId(location.hash.slice(1)); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])
  const selected = catalogue.find(item => item.id === id)
  const categories = ['All', ...new Set(catalogue.map(item => item.category))]
  return <><header className="about-header"><a href="index.html">Pearl Tours</a>
    <nav aria-label="Main navigation"><a href="tours.html">Our tours</a><a href="experiences.html" aria-current="page">Experiences</a><a href="about.html">About us</a><a href="contact.html">Contact us</a></nav></header>
    {selected ? <main className="itinerary">
      <a href="experiences.html">← All experiences</a><h1>{selected.title}</h1>
      <p>{selected.category} · {selected.duration}</p><img src={selected.image} alt="" />
      <p>{selected.description}</p>{selected.fullDescription.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
      <div className="exp-gallery">{selected.gallery.map(src=><img key={src} loading="lazy" src={src} alt="" />)}</div>
      <p>{selected.tags.join(' · ')}</p>
      <a href={'contact.html?experience='+selected.id}>Enquire about this experience →</a>
    </main> : <main className="tour-catalogue"><h1>Sri Lanka experiences</h1>
      <label className="tour-filters">Explore by interest
        <select value={category} onChange={event=>setCategory(event.target.value)}>
          {categories.map(name=><option key={name}>{name}</option>)}
        </select>
      </label>
      <div className="tour-grid collection">{catalogue.filter(item=>category === 'All' || item.category === category).map(item=>
        <a className="experience-card" key={item.id} href={'#'+item.id}>
          <img loading="lazy" src={item.image} alt="" />
          <small>{item.category} · {item.duration}</small><h2>{item.title}</h2><p>{item.description}</p>
        </a>)}</div>
    </main>}<Footer /></>
}
