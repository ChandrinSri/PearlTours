import Footer from './Footer'

export default function About() {
  return <>
    <header className="about-header">
      <a href="index.html">Pearl Tours</a>
      <nav aria-label="Main navigation"><a href="tours.html">Our tours</a> <a href="about.html" aria-current="page">About us</a> <a href="contact.html">Contact us</a></nav>
    </header>
    <main className="about-story">
      <h1>About Pearl Tours</h1>
      <p>Pearl Tours is a family travel business based in Australia. We help Australian travellers plan holidays in Sri Lanka, working with Tremendous Lanka, our tour partner on the island.</p>
      <h2>Planning your trip</h2>
      <p>You can start with a route that catches your eye or with something you’d love to do. A walk through Galle Fort, a morning on safari or time in a Sri Lankan kitchen can help shape the rest of your holiday.</p>
      <p>Talk to Pearl Tours in Australia about your interests and how long you have. We’ll help you explore itineraries and experiences from Tremendous Lanka’s collection.</p>
      <a href="index.html#featured">Explore our Sri Lanka tours →</a>
    </main>
    <Footer />
  </>
}

