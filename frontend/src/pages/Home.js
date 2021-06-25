import React from 'react';
import ContentBar from '../components/ContentBar'
import { homeone, homethree } from '../components/Data';
import Contentvideo from '../components/videoSection';
import MecContainer from '../components/MecContent';
function Home() {
  return (
    <>
    <Contentvideo />
    <ContentBar {...homethree} />
    <MecContainer />
      <ContentBar {...homeone} />
    </>
  );
}

export default Home;