import React from 'react';
import Header from '../utils/Header';
import Spinner from '../utils/Spinner';


export default () => {
  return (
    <>
      <Header title="What's the Weather" />
      <Spinner message="Loading..." />
    </>
  );
};

