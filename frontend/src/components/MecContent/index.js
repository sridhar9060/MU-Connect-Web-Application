import React, { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './mecElements';

const MecContainer = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>MU CONNECT</HeroH1>
          <HeroP>Want to get Updates of What Happening in University Here is your solution</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default MecContainer;
