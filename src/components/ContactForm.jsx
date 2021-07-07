import { Button, Container, Flex, Image, Input, Text } from '@chakra-ui/react';
import camposLogo from '../media/logo_campos.svg';
import React from 'react';

export const ContactForm = () => {
  return (
    <Container maxW={{ base: 'container.xl', lg: '30em' }}>
      <Flex
        flexDir="column"
        bg="rgba(255,255,255,70%)"
        padding="3em"
        borderRadius="10px"
      >
        <Flex justifyContent="center" margin="1em">
          <Image src={camposLogo} width="25em" />
        </Flex>
        <Text
          textAlign="center"
          color="rgb(63,91,66)"
          fontWeight="bold"
          fontSize="1.2em"
          margin="1em"
        >
          CONTACTATE CON NOSOTROS PARA RECIBIR MÁS INFORMACIÓN
        </Text>
        <Input placeholder="Nombre Completo" marginTop="1em" />
        <Input placeholder="Email *" marginTop="1em" />
        <Input placeholder="Telefono" marginTop="1em" />
        <Input placeholder="Comentarios" marginTop="1em" />
        <Flex justifyContent="center">
          <form action="?" method="POST">
            <div class="g-recaptcha" data-sitekey="your_site_key"></div>
            <br />
            <input type="submit" value="Submit" />
          </form>
        </Flex>
        <Flex justifyContent="center">
          <Button
            bg="rgb(209,57,57)"
            borderRadius="full"
            textTransform="uppercase"
            padding="1.5em"
            fontSize="1.2em"
            _hover={{ color: 'rgb(45,45,45)' }}
          >
            Invertí ahora
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};
