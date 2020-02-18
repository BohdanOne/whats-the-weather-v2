import React from 'react';
import Spinner from '../shared/Spinner';


export default (props: { location: string}) => {
  return (
    <>
      <h2>Check weather for:</h2>
      {props.location ? (
        <p>{props.location}</p>
      ) : (
        <Spinner message="Waiting for your location..." />
      )}
    </>
  );
};
