import { Container } from '@chakra-ui/react';
import React from 'react';
import { LandingText } from '../components/LandingText';

export const LandingPage = () => {
  return (
    <Container maxW="container.xl" marginTop="5em">
      <LandingText />
    </Container>
  );
};
