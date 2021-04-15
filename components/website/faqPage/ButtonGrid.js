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

function ButtonGrid() {
  return (
    <>
      <Box>
        <SimpleGrid
          columns={['1', '3', '2', '4', '4']}
          spacing={10}
          pt={['93%', '50%', '48%', '40%', '35%']}
          px='10%'
          position='absolute'
          zIndex='10'
        >
          <Box
            bg='white'
            py='20%'
            boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
            borderRadius='5px'
          >
            <Text fontSize='xs' px='20%' textAlign='center'>
              Premium Services
            </Text>
          </Box>
          <Box
            bg='white'
            py='20%'
            boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
            borderRadius='5px'
          >
            <Text fontSize='xs' px='20%' textAlign='center'>
              Maintenance/Repair Request
            </Text>
          </Box>
          <Box
            bg='white'
            py='20%'
            boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
            borderRadius='5px'
          >
            <Text fontSize='xs' px='20%' textAlign='center'>
              Inspection Request
            </Text>
          </Box>
          <Box
            bg='white'
            py='20%'
            boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
            borderRadius='5px'
          >
            <Text fontSize='xs' px='20%' textAlign='center'>
              Emergency /Rescue
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default ButtonGrid;
