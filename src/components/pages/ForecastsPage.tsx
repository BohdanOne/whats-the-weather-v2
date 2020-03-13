import React from 'react';
import ForecastContainer from '../forecast/ForecastContainer';


const ForecastsPage: React.FC = () => {
  return (
    <div className='l-page'>
      <section className="l-section l-section--forecast">
        <ForecastContainer />
      </section>
    </div>
  );
};

export default ForecastsPage;
