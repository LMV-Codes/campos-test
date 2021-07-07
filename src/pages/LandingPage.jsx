import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { LandingText } from '../components/LandingText';

export const LandingPage = () => {
  return (
    <Container maxW="container.xl" marginTop="5em">
      <Flex flexWrap="wrap">
        <LandingText />
        <ContactForm />
      </Flex>
    </Container>
  );
};
