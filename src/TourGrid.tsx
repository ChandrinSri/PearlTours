import type { Tour } from './data'

export default function TourGrid({ tours }: { tours: Tour[] }) {
  return (
    <div className="tour-grid">{tours.map(tour =>
      <article key={tour.slug}>
        <img loading="lazy" src={tour.image} alt="" />
        <p>{tour.category} · {tour.duration}</p>
        <h3><a href={`tours/${tour.slug}.html`}>{tour.title}</a></h3>
        <p>{tour.summary}</p><small>{tour.route}</small>
      </article>
    )}</div>
  )
}
