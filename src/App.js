import React from 'react';
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { LandingPage } from './pages/LandingPage';
import image1 from './media/c1.jpg';
import image2 from './media/c2.jpg';
import image3 from './media/c3.jpg';
import BackgroundSlider from 'react-background-slider';

function App() {
  const imageArray = [image1, image2, image3];

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          color: 'white',
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <BackgroundSlider images={imageArray} duration={10} transition={1} />
      <Flex minH="100vh">
        <LandingPage />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
