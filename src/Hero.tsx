import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const video = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const film = video.current!
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || connection?.saveData) return

    function stop() {
      clearTimeout(timer)
      film.removeEventListener('playing', reveal)
      film.removeEventListener('error', stop)
      film.pause()
      film.removeAttribute('src')
      film.load()
      setVisible(false)
    }
    function reveal() {
      clearTimeout(timer)
      setVisible(true)
      setPaused(false)
    }
    const timer = window.setTimeout(stop, 4000)
    film.addEventListener('playing', reveal)
    film.addEventListener('error', stop)
    film.src = 'https://raw.githubusercontent.com/ChandrinSri/kay-tours/main/public/images/hero.mp4'
    void film.play().catch(stop)
    return stop
  }, [])

  function togglePlayback() {
    const film = video.current!
    if (film.paused) void film.play().catch(() => setVisible(false))
    else { film.pause(); setPaused(true) }
  }

  return <section className="hero">
    <img className="media" src="/ella.jpg" fetchPriority="high" alt="" />
    <video ref={video} className="media" muted loop playsInline aria-hidden="true" style={{ opacity: visible ? 1 : 0 }} />
    <header><a href="index.html"><img className="wordmark" src="/pearl.png" alt="Pearl Tours" /></a><nav aria-label="Main navigation"><a href="tours.html">Our tours</a> <a href="experiences.html">Experiences</a> <a href="about.html">About us</a> <a href="contact.html">Plan my trip</a></nav></header>
    <div className="intro">
      <h1>Sri Lanka,<br />at your pace.</h1>
      <p>From the tea hills to the Indian Ocean, explore the island with our family in Australia and our travel partners in Sri Lanka.</p>
      <a className="cta" href="tours.html">Explore journeys →</a>
    </div>
    {visible && <button onClick={togglePlayback}>{paused ? 'Play film' : 'Pause film'}</button>}
  </section>
}

