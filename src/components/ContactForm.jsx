import { Button, Container, Flex, Image, Input, Text } from '@chakra-ui/react';
import camposLogo from '../media/logo_campos.svg';
import React from 'react';

export const ContactForm = () => {
  return (
    <Container maxW={{ base: 'container.xl', lg: '28em' }}>
      <Flex
        flexDir="column"
        bg="rgba(255,255,240,60%)"
        padding={{ base: '0em', lg: '3em' }}
        borderRadius="10px"
        marginTop="1.5em"
      >
        <Flex justifyContent="center" margin="1em">
          <Image src={camposLogo} width={{ base: '20em', lg: '25em' }} />
        </Flex>
        <Flex justifyContent="center">
          <Text
            width={{ base: '20em' }}
            textAlign="center"
            color="rgb(63,91,66)"
            fontWeight="bold"
            fontSize={{ base: '1em', lg: '1.2em' }}
            margin="1em"
            marginTop="1.5em"
            marginBottom="1.5em"
          >
            CONTACTATE CON NOSOTROS PARA RECIBIR MÁS INFORMACIÓN
          </Text>
        </Flex>
        <Input placeholder="Nombre Completo" marginTop="1em" />
        <Input placeholder="Email *" marginTop="1em" />
        <Input placeholder="Telefono" marginTop="1em" />
        <Input placeholder="Comentarios" marginTop="1em" />
        <Flex justifyContent="center" marginTop="1.5em">
          <form action="?" method="POST">
            <div className="g-recaptcha" data-sitekey="your_site_key"></div>
            <br />
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
