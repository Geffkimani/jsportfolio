import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey There 👋 <br />
          I Am Geoffrey Kimani
        </SectionTitle>
        <SectionText>
          I build backend for web apps with Python, Java, and Next.js—anything from clean interfaces to machine learning-powered tools. My favorite project? A movie recommender that helps you find your next favorite film, powered by real ML magic.
        </SectionText>

        <Button onClick={props.handleClick}>Projects</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;