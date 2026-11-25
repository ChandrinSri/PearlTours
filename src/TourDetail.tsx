import type { Tour } from './data'

export default function TourDetail({ tour }: { tour: Tour }) {
  return <main className="itinerary">
    <a href="../index.html#featured">← Pearl Tours · Featured tours</a>
    <h1>{tour.title}</h1><p>{tour.category} · {tour.duration}</p>
    <img src={tour.image} alt="" /><p>{tour.summary}</p>
    <h2>Route</h2><p>{tour.route}</p>
    {tour.days.map(day => <section key={day.title}>
      <h2>{day.title}</h2><p>{day.description}</p>
    </section>)}
  </main>
}
