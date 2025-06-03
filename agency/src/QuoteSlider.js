// src/components/QuoteSlider.jsx
import React from 'react';

const QuoteSlider = ({ quotes = [], autoPlay = true, interval = 6000 }) => {
  const listRef = React.useRef(null);

  // simple auto-scroll
  React.useEffect(() => {
    if (!autoPlay || quotes.length <= 1) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % quotes.length;
      listRef.current?.children[i]?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, quotes.length]);

  return (
    <section className="quote">
      <ul className="quote__track" ref={listRef}>
        {quotes.map(({ text, author, role }, idx) => (
          <li key={idx} className="quote__slide">
            <blockquote>“{text}”</blockquote>
            <p className="quote__author">
              — {author}, <span>{role}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuoteSlider;
