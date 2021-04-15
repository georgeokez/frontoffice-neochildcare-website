import React from 'react';
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
  Divider,
  SimpleGrid,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

function GetQuote() {
  return (
    <>
      <SimpleGrid
        columns='1'
        p={{ base: '5', md: '10', xl: '10' }}
        mx={{ base: '5', md: '20', xl: '20' }}
        mb={['13%', , '8%']}
        rounded='md'
        bg='blue.50'
      >
        <Box display='flex' justifyContent='space-around' alignItems='center'>
          <Text fontSize='sm' fontWeight='600' color='#1a97cf'>
            Have an urgent issues to fix on your vehicle?
          </Text>
          <Button
            fontSize='xs'
            bg='#1A97CF'
            borderRadius='3px'
            fontWeight='500'
            colorScheme='blue'
            px='7'
          >
            <Link href='/quote'>GET A QUOTE</Link>
          </Button>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default GetQuote;
