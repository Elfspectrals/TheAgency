import React from 'react';
import QuoteSlider from './QuoteSlider';   // you already built this

const testimonials = [
  { text:'Contract completed flawlessly, ahead of schedule.',
    author:'Anonymous CEO', role:'Fortune-100' },
  { text:'The intel they gathered saved our entire operation.',
    author:'Field Commander', role:'Special Ops' },
];

const TestimonialSlider = () => (
  <section className="t-slider">
    <h2 className="t-slider__heading">What Clients Say</h2>
    <QuoteSlider quotes={testimonials} />
  </section>
);

export default TestimonialSlider;
