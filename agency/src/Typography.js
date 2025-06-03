// src/components/Typography.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ 
  variant = 'body', 
  children, 
  className = '', 
  style = {},
  component
}) => {
  const variants = {
    h1: { tag: 'h1', class: 'typography--h1' },
    h2: { tag: 'h2', class: 'typography--h2' },
    h3: { tag: 'h3', class: 'typography--h3' },
    body: { tag: 'p', class: 'typography--body' },
    subtitle: { tag: 'p', class: 'typography--subtitle' },
    caption: { tag: 'span', class: 'typography--caption' }
  };

  const { tag: Tag, class: variantClass } = variants[variant] || variants.body;
  const Component = component || Tag;

  return (
    <Component 
      className={`typography ${variantClass} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'body', 'subtitle', 'caption']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  component: PropTypes.elementType
};

export default Typography;