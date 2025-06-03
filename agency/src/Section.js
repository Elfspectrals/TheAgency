import React from 'react';

const Section = ({ children, title, className = '', ...props }) => (
  <section className={`section ${className}`} {...props}>
    {title && <h2 className="section__title">{title}</h2>}
    <div className="section__content">
      {children}
    </div>
  </section>
);

export default Section;
