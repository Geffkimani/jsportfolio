import React, { useState, useRef, useEffect } from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { Box, Boxes, BoxNum, BoxText } from '../Acomplishments/AcomplishmentsStyles';

const data = [ 
  { number: 5, text: 'Years of Experience'},
  { number: 20, text: 'Personal Projects'},
  { number: 15, text: 'Collaborations', },
  { number: 40, text: 'Finished customer Apps', }
];

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
      Full-stack developer skilled in Next.js, Java, Python and Cybersecurity. I am an ethical hacker and a bug hunter, Finding bugs and critical system faults/issues.
      </SectionText>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;