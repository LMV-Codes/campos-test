import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import Logos from '../media/logos.svg';

export const LandingText = () => {
  const perks = [
    'diseño moderno y minimalista',
    'hormigón visto',
    'hall con doble altura',
    'agua caliente central',
    'balcón aterrazado con parrilla',
  ];

  return (
    <Flex flexDir="column" marginTop="2em" justifyContent="center">
      <Flex width={{ base: '18em', md: '18em', lg: '100%' }}>
        <Heading
          fontWeight="light"
          fontFamily="Roboto, sans-serif"
          fontSize={{ base: '1.5em', lg: '6xl' }}
        >
          OPORTUNIDAD DE POZO EN LO MEJOR DE SAN MARTÍN CENTRO
        </Heading>
      </Flex>
      <Flex>
        <Flex alignItems="center">
          <Heading fontSize={{ base: '1.4em', lg: '6xl' }} fontFamily="roboto">
            DESDE USD 69.900
          </Heading>
        </Flex>
        <Flex alignItems="center">
          <Heading marginLeft="0.5em" fontWeight="light" fontFamily="roboto">
            - 7mo "C"
          </Heading>
        </Flex>
      </Flex>
      <br />
      <Flex marginTop="1.5em" marginBottom="1.5em">
        <Flex bg="rgb(63,91,66)" padding="0.4em" justifyContent="center">
          <Text
            textAlign={{ base: 'center', md: 'none', lg: 'none' }}
            color="rgb(207,185,22)"
            letterSpacing={{ base: '0px', lg: '6px' }}
            fontSize={{ base: '1em', md: '0.8em', lg: 'xl' }}
          >
            ANTICIPO USD 30.000 + 48 CUOTAS EN PESOS O EN DÓLARES
          </Text>
        </Flex>
      </Flex>
      <br />
      <Heading fontSize={{ base: '1.4em', lg: '4xl' }} letterSpacing="1.5px">
        UNIDADES DE 2 Y 3 AMBIENTES
      </Heading>
      <Text fontSize={{ base: '1.4em', lg: '4xl' }}>
        EMPRENDIMIENTO PREMIUM
      </Text>
      <br />
      {perks.map((perk, index) => (
        <Text
          fontFamily="Arial"
          textTransform="uppercase"
          key={index}
          fontSize={{ base: '1.4em', lg: '2xl' }}
        >
          - {perk}
        </Text>
      ))}
      <Flex width="26em" display={{ base: 'none', lg: 'flex' }}>
        <Image src={Logos} />
      </Flex>
    </Flex>
  );
};
