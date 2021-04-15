import React, { useState } from 'react';
import { Search2Icon } from '@chakra-ui/icons';

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
import allIcons from '../../dashboard/icons/Icons';
import { RepairRequest, PremiumService } from '../../dashboard/icons/Icons';

const shadow =
  '0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)';
const hoverColor = '#1A97CF';

function SearchSection({ selected }) {
  const { InspectionRequest, Emergency } = allIcons;

  return (
    <>
      <Box>
        <Box
          bg='rgba(26, 151, 207, 0.08)'
          my='20'
          w='100%'
          py='10%'
          position='absolute'
          zIndex='0'
        >
          <Heading
            color='#1A97CF'
            textAlign='center'
            fontSize={{ base: 'xl', md: '2xl', xl: '4xl' }}
          >
            Hello, how can we help?
          </Heading>

          <InputGroup
            my='8'
            mx={{ base: '5%', md: '20%', xl: '25%' }}
            w={{ base: '90%', md: '60%', xl: '50%' }}
          >
            <InputLeftElement
              pointerEvents='none'
              children={<Search2Icon mt='3' color='gray.300' />}
            />
            <Input
              fontSize='xs'
              boxShadow='0px 2px 15px rgba(26, 151, 207, 0.1)'
              borderRadius='5px'
              type='text'
              placeholder='Ask a question'
              py='6'
              bg='#F9FAFC'
            />
            <InputRightElement
              w='5rem'
              children={
                <Button
                  mr='5'
                  mt='3'
                  fontSize='xs'
                  fontWeight='light'
                  color='white'
                  bg='#1A97CF'
                  px='70%'
                >
                  SEARCH
                </Button>
              }
            />
          </InputGroup>

          <Text textAlign='center' fontSize='xs' w={{ base: '100%' }}>
            Or choose category to get the help you need
          </Text>
        </Box>
        {/* */}
        <Box>
          <SimpleGrid
            columns={['1', '3', '2', '4', '4']}
            spacing={10}
            pt={['93%', '50%', '48%', '40%', '35%']}
            px='10%'
            position='static'
            zIndex='10'
          >
            <Button
              bg='white'
              py='35%'
              boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
              borderRadius='5px'
              display='flex'
              flexDirection='column'
              _hover={{
                boxShadow: shadow,
                borderWidth: '2px',
                borderColor: hoverColor,
              }}
            >
              <PremiumService my='3' _hover={{ fill: hoverColor }} />
              <Text fontSize='xs' px='20%' textAlign='center'>
                Premium Services
              </Text>
            </Button>
            <Button
              bg='white'
              _hover={{
                boxShadow: shadow,
                borderWidth: '2px',
                borderColor: hoverColor,
              }}
              py='35%'
              boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
              borderRadius='5px'
              display='flex'
              flexDirection='column'
            >
              <RepairRequest
                my='3'
                _groupHover={{ color: hoverColor }}
                color={selected ? hoverColor : '#9D9E9F'}
              />
              <Text fontSize='xs' px='20%' textAlign='center'>
                Maintenance/Repair Request
              </Text>
            </Button>
            <Button
              bg='white'
              _hover={{
                boxShadow: shadow,
                borderWidth: '2px',
                borderColor: hoverColor,
              }}
              py='35%'
              boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
              borderRadius='5px'
              display='flex'
              flexDirection='column'
            >
              <InspectionRequest my='3' />
              <Text fontSize='xs' px='20%' textAlign='center'>
                Inspection Request
              </Text>
            </Button>
            <Button
              bg='white'
              _hover={{
                boxShadow: shadow,
                borderWidth: '2px',
                borderColor: hoverColor,
              }}
              py='35%'
              boxShadow='0px -4px 20px rgba(26, 151, 207, 0.1), 0px 4px 20px rgba(26, 151, 207, 0.1)'
              borderRadius='5px'
              display='flex'
              flexDirection='column'
            >
              <Emergency my='3' />
              <Text fontSize='xs' px='20%' textAlign='center'>
                Emergency /Rescue
              </Text>
            </Button>
          </SimpleGrid>

          <Text
            textAlign='center'
            fontSize='xs'
            fontWeight='lighter'
            my='3%'
            mx={{ base: '5%', md: '18%', xl: '35%' }}
          >
            Our team is available to speak with you Monday-Friday, from 8AM to
            6PM, and Saturday from 10AM-2PM
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default SearchSection;
