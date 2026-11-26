import { useEffect } from 'react'
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
  useEffect(() => {
    function reveal() {
      const target = document.getElementById(location.hash.slice(1))
      if (target instanceof HTMLDetailsElement) target.open = true
      target?.scrollIntoView()
    }
    reveal()
    window.addEventListener('hashchange', reveal)
    return () => window.removeEventListener('hashchange', reveal)
  }, [])
  const categories = [...new Set(catalogue.map(item => item.category))]
  return <><header className="about-header"><a href="index.html">Pearl Tours</a>
    <nav aria-label="Main navigation"><a href="tours.html">Our tours</a><a href="experiences.html" aria-current="page">Experiences</a><a href="about.html">About us</a><a href="contact.html">Contact us</a></nav></header>
    <main className="tour-catalogue"><h1>Sri Lanka experiences</h1>
    <p>Choose an experience to see what the day involves and how long to allow.</p>
    <nav className="exp-categories" aria-label="Experience categories">{categories.map((name,i)=><a key={name} href={'#group-'+i}>{name}</a>)}</nav>
    {categories.map((name,i)=><section key={name} id={'group-'+i} className="exp-group"><h2>{name}</h2>
      {catalogue.filter(item=>item.category===name).map(item=><details key={item.id} id={item.id}>
        <summary><strong>{item.title}</strong> · {item.duration}</summary>
        <p>{item.description}</p><img className="exp-cover" loading="lazy" src={item.image} alt="" />
        {item.fullDescription.map((p,i)=><p key={i}>{p}</p>)}
        <div className="exp-gallery">{item.gallery.map(src=><img key={src} loading="lazy" src={src} alt="" />)}</div>
        <p>{item.tags.join(' · ')}</p><a href={'contact.html?experience='+encodeURIComponent(item.id)}>Enquire about this experience →</a>
      </details>)}</section>)}</main><Footer /></>
}
