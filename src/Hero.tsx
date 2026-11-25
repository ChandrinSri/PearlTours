import { useEffect, useRef, useState } from 'react'

const poster = 'https://res.cloudinary.com/dvdwvlhpy/image/upload/f_auto,q_auto,w_1800,c_limit/v1777220412/Website_Images_1_fluhcx.png'
const posterSizes = [480, 768, 1200, 1800]
  .map(width => `${poster.replace('w_1800', 'w_' + width)} ${width}w`)
  .join(', ')

export default function Hero() {
  const video = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const film = video.current!
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || connection?.saveData) return

    const fallbackKey = 'pearl.hero.photoOnly'
    try {
      if (sessionStorage.getItem(fallbackKey)) return
    } catch {
      // The photo fallback also works when browser storage is unavailable.
    }

    function usePhoto() {
      try {
        sessionStorage.setItem(fallbackKey, '1')
      } catch {
        // Apply the fallback to this page even without session storage.
      }
      stop()
    }

    function stop() {
      clearTimeout(timer)
      film.removeEventListener('playing', reveal)
      film.removeEventListener('error', usePhoto)
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
    const timer = window.setTimeout(usePhoto, 4000)
    film.addEventListener('playing', reveal)
    film.addEventListener('error', usePhoto)
    film.src = 'https://raw.githubusercontent.com/ChandrinSri/kay-tours/main/public/images/hero.mp4'
    void film.play().catch(() => { if (film.hasAttribute('src')) usePhoto() })
    return stop
  }, [])

  function togglePlayback() {
    const film = video.current!
    if (film.paused) void film.play().catch(() => setVisible(false))
    else { film.pause(); setPaused(true) }
  }

  return <section className="hero">
    <img className="media" src={poster} srcSet={posterSizes} sizes="100vw" fetchPriority="high" alt="" />
    <video ref={video} className="media" muted loop playsInline aria-hidden="true" style={{ opacity: visible ? 1 : 0 }} />
    <header><strong>Pearl Tours</strong><nav aria-label="Main navigation"><a href="tours.html">Our tours</a> <a href="about.html">About us</a> <a href="contact.html">Contact us</a></nav></header>
    <div className="intro">
      <h1>Discover<br /><i>Sri Lanka.</i></h1>
      <p>From the tea hills to the Indian Ocean, explore the island with our family in Australia and our travel partners in Sri Lanka.</p>
      <a className="cta" href="tours.html">Explore tours ↗</a>
    </div>
    {visible && <button onClick={togglePlayback}>{paused ? 'Play film' : 'Pause film'}</button>}
  </section>
}

