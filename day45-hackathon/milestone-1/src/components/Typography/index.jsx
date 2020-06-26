import React from 'react';
import classNames from 'classnames';
import './index.scss';

const Typography = ({ type, size, children }) => (
  <span className={classNames(['Typography', type, size])}>
    {children}
  </span>
);

export default Typography;
