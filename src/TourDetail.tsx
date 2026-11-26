import { optionalActivities, type Tour } from './data'

export default function TourDetail({ tour }: { tour: Tour }) {
  const stops = tour.route.split(' → ')
  const activities = optionalActivities.filter(activity => activity.stops.some(stop => stops.includes(stop)))
  return <main className="itinerary">
    <a href="../tours.html">← All tours</a>
    <h1>{tour.title}</h1><p>{tour.category} · {tour.duration}</p>
    <img src={tour.image} alt="" /><p>{tour.summary}</p>
    <h2>Highlights</h2><ul>{tour.highlights.map(item => <li key={item}>{item}</li>)}</ul>
    <h2>Activities</h2><p>{tour.activities}</p>
    <h2>Route</h2><p>{tour.route}</p>
    {tour.days.map(day => <section key={day.title}>
      <h2>{day.title}</h2><p>{day.description}</p>
    </section>)}
    {activities.length > 0 && <section aria-labelledby="optional-activities">
      <h2 id="optional-activities">Optional experiences along your route</h2>
      <p>Ask us which activities can fit around your daily itinerary.</p>
      {activities.map(activity => <article key={activity.title}>
        <h3>{activity.title}</h3>
        <p>{activity.stops.filter(stop => stops.includes(stop)).join(' or ')} · {activity.duration}</p>
        <p>{activity.summary}</p>
      </article>)}
    </section>}
    <a href={`../contact.html?tour=${tour.slug}`}>Enquire about this tour →</a>
  </main>
}


