/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Info(props) {
  const { label } = props;
  const { data } = props;
  return (
    <div>
      <div>{label}</div>
      <div>{data}</div>
    </div>
  );
}
