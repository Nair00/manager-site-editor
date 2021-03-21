import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjects } from './Data';

function Home() {
  return (
    <>
      {homeObjects.map((item, index) => {
              return (
                <HeroSection {...item} />
              );
            })}
    </>
  );
}

export default Home;