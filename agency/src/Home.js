import React from 'react';
import HomeHero          from './HomeHero';
import ServiceGrid       from './ServiceGrid';
import TestimonialSlider from './TestimonialSlider';
import CTASection        from './CTASection';

const Home = () => (
  <div>
    <HomeHero />
    <section className="width-container" style={{padding:'0 1rem'}}>
      <ServiceGrid />
    </section>
    <TestimonialSlider />
    <CTASection />
  </div>
);

export default Home;
