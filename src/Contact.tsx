/// <reference types="vite/client" />
import { catalogue } from './experienceCatalogue'
import type { FormEvent } from 'react'
import Footer from './Footer'
import { tours } from './data'

const inbox = import.meta.env.VITE_PEARL_ENQUIRY_EMAIL?.trim()

function openDraft(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  if (!inbox) return
  const fields = new FormData(event.currentTarget)
  const tour = tours.find(item => item.slug === fields.get('tour'))
  const subject = 'Pearl Tours enquiry: ' + (tour?.title ?? 'Sri Lanka holiday')
  const body = fields.get('message') + '\n\nFrom: ' + fields.get('name') + '\nReply to: ' + fields.get('email')
  location.href = 'mailto:' + encodeURIComponent(inbox) + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
}

export default function Contact() {
  const slug = new URLSearchParams(location.search).get('tour')
  const experience = catalogue.find(item => item.id === new URLSearchParams(location.search).get("experience"))
  const selected = tours.find(tour => tour.slug === slug)
  return <>
    <header className="about-header">
      <a href="index.html">Pearl Tours</a>
      <nav aria-label="Main navigation"><a href="tours.html">Our tours</a> <a href="experiences.html">Experiences</a> <a href="about.html">About us</a> <a href="contact.html" aria-current="page">Contact us</a></nav>
    </header>
    <main className="about-story">
      <h1>Contact us</h1>
      <p>Tell us when you’d like to travel to Sri Lanka and what you’d love to see.</p>
      <form className="enquiry" onSubmit={openDraft}>
        <label>Your name<input name="name" autoComplete="name" required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
        <label>Tour of interest<select name="tour" defaultValue={selected?.slug ?? ''}>
          <option value="">General enquiry</option>
          {tours.map(tour => <option key={tour.slug} value={tour.slug}>{tour.title}</option>)}
        </select></label>
        <label>Your message<textarea defaultValue={experience ? "I’m interested in " + experience.title + "." : ""} name="message" rows={5} required /></label>
        <p>{inbox ? 'Review and send your enquiry in your email app.' : 'Email enquiries will open soon.'}</p>
        <button type="submit" disabled={!inbox}>Open email draft</button>
      </form>
    </main>
    <Footer />
  </>
}
