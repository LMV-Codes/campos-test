import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const LandingText = () => {
  const perks = [
    'diseño moderno y minimalista',
    'hormigón visto',
    'hall con doble altura',
    'agua caliente central',
    'balcón aterrazado con parrilla',
  ];

  return (
    <Flex flexDir="column">
      <Heading fontWeight="light">
        OPORTUNIDAD DE POZO EN LO MEJOR DE SAN MARTÍN CENTRO
      </Heading>
      <br />
      <Flex>
        <Heading>DESDE USD 69.900</Heading>
        <Heading marginLeft="0.5em" fontWeight="regular">
          - 7mo "C"
        </Heading>
      </Flex>
      <br />
      <Flex>
        <Flex bg="rgb(63,91,66)" padding="0.3em" justifyContent="center">
          <Text color="rgb(207,185,22)" letterSpacing="5px">
            ANTICIPO USD 30.000 + 48 CUOTAS EN PESOS O EN DÓLARES
          </Text>
        </Flex>
      </Flex>
      <br />
      <Text>UNIDADES DE 2 Y 3 AMBIENTES</Text>
      <Text>EMPRENDIMIENTO PREMIUM</Text>
      <br />
      {perks.map((perk, index) => (
        <Text textTransform="uppercase" key={index}>
          - {perk}
        </Text>
      ))}
    </Flex>
  );
};
