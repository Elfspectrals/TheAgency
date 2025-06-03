// src/components/Avatar.jsx
import React from 'react';
import PropTypes from 'prop-types';


/**
 * @param {("square"|"rounded")} shape - visual style
 * @param {string} url  - image source
 * @param {number} size - (optionnel) taille en px — default 48
 * @param {string} alt  - (optionnel) texte alternatif
 */
const Avatar = ({ shape = 'square', url, size = 48, alt = 'Avatar' }) => (
  <img
    src={url}
    alt={alt}
    className={`avatar avatar--${shape}`}
    style={{ width: size, height: size }}
  />
);

Avatar.propTypes = {
  shape: PropTypes.oneOf(['square', 'rounded']),
  url:   PropTypes.string.isRequired,
  size:  PropTypes.number,
  alt:   PropTypes.string,
};

export default Avatar;
