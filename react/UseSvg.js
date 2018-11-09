import React from 'react';

const Use = ({id, ...props}) => (
  <use href={`#${id}`} xlinkHref={`#${id}`} {...props} />
);

export default Use;