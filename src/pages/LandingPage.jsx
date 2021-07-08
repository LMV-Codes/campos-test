import { Container, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { LandingText } from '../components/LandingText';
import Logos from '../media/logos.svg';
import Band from '../media/banda.png';

export const LandingPage = () => {
  return (
    <>
      <Image
        position="absolute"
        top="0px"
        right="0"
        left="auto"
        height={{ base: '6em', md: '9em', lg: '13em' }}
        src={Band}
      />
      <Container maxW="95em" marginTop="4em">
        <Flex flexWrap={{ base: 'wrap', md: 'wrap', lg: 'nowrap' }}>
          <LandingText />
          <ContactForm />
        </Flex>
        <Flex justifyContent="flex-start" width="100%">
          <Flex
            width="20em"
            display={{ base: 'flex', lg: 'none' }}
            justifySelf="flex-start"
          >
            <Image src={Logos} />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};
