import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Logos from '../media/logos.svg';

export const LogosMobile = () => {
  return (
    <Flex justifyContent="flex-start" width="100%">
      <Flex
        width="20em"
        display={{ base: 'flex', lg: 'none' }}
        justifySelf="flex-start"
      >
        <Image src={Logos} />
      </Flex>
    </Flex>
  );
};
