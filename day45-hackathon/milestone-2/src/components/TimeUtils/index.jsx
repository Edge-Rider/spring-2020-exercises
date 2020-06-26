import React from 'react';
import { DateTime } from 'luxon';
import Typography from 'components/Typography';

export const Duration = ({ arrival, departure }) => {
  const duration = DateTime
    .fromMillis(arrival * 1000)
    .diff(DateTime.fromMillis(departure * 1000))
    .toFormat(`hh 'h' mm 'm'`);

  return (
    <Typography>{duration}</Typography>
  );
};

export const Time = ({ datetime }) => (
  <Typography>
    {DateTime
      .fromMillis(datetime * 1000)
      .toFormat('hh:mm')}
  </Typography>
);

