import { Button, Flex, Heading, Input, Text } from '@chakra-ui/react';
import React from 'react';

export const ContactForm = () => {
  return (
    <Flex flexDir="column" bg="gray.300">
      <Heading textTransform="uppercase">campos</Heading>
      <Text>CONTACTATE CON NOSOTROS PARA RECIBIR MÁS INFORMACIÓN</Text>
      <Input placeholder="Nombre Completo" />
      <Input placeholder="Email *" />
      <Input placeholder="Telefono" />
      <Input placeholder="Comentarios" />
      <form action="?" method="POST">
        <div class="g-recaptcha" data-sitekey="your_site_key"></div>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <Button>Invertí ahora</Button>
    </Flex>
  );
};
