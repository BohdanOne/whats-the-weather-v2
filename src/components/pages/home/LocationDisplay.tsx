import React, { useState, useEffect } from 'react';
import Spinner from '../../shared/Spinner';

export default () => {
  const [location, setLocation] = useState('');

  // useEffect(() => {
  //   const foundLocation = findLocation();
  //   setLocation(foundLocation)
  // })
  return (
    <>
      {navigator.geolocation ? displayLocation(location) : notSupported()}
    </>
  );
};

function notSupported() {
  return <p>Geolocation is not supported by your browser.</p>;
}

function displayLocation(location: string) {
  if (location) {
    return <p>Your current location: {location} </p>;
  } else {
    return <Spinner message="Searching your location..." />;
  }
}

// async function findLocation() {
//   try {
//     const location: string = await navigator.geolocation.getCurrentPosition(
//       (position: {coords: { latitude: number, longitude: number}}): Promise<string> => {
//         const lat = position.coords.latitude;
//         const long = position.coords.longitude;
//         return lat.toString() + long.toString();
//       },
//       () => notSupported()
//     ) as string;
//     return location;
//   } catch (e) {
//     console.log(e)
//   }
// }
