import React from 'react';
import Navbar from '../common/Navbar';
import GetQuote from '../common/GetQuote';
import Footer from '../common/Footer';
import allIcons from '../../dashboard/icons/Icons';

import {
  Box,
  SimpleGrid,
  Text,
  Input,
  Textarea,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
} from '@chakra-ui/react';

function Contact() {
  const { HQIcon, ServiceCenter, PhoneIcon } = allIcons;

  return (
    <Box>
      <Navbar
        bg='#1A97CF'
        btn1Text='white'
        btn1Bg='transparent'
        btn2Text='#1A97CF'
        btn2Bg='white'
      />
      <Box mt={['25%', '25%', '10%']} mx='10%' mb='15%'>
        <Heading fontSize='2xl' color='#1A97CF'>
          CONTACT US
        </Heading>
        <Text fontSize='xs' w='35%' mb='1%'>
          Want to Partner, Request Corporate Fleet Maintenance, or ask questions
        </Text>
        <SimpleGrid columns={[1, 2, 2]} spacing={10}>
          <FormControl w='90%'>
            <Input type='text' placeholder='Full Name' fontSize='xs' my='3%' />
            <Input
              type='email'
              placeholder='Email Address'
              fontSize='xs'
              my='3%'
            />
            <Textarea
              placeholder='Your Message'
              fontSize='xs'
              my='3%'
              h='50%'
            />
            <Button
              fontSize='xs'
              bg='#1A97CF'
              color='white'
              fontWeight='light'
              borderRadius='none'
            >
              SEND A MESSAGE
            </Button>
          </FormControl>
          <Box>
            <Heading>Maps</Heading>
          </Box>
        </SimpleGrid>

        <Box></Box>
      </Box>

      <SimpleGrid columns={3} spacing={10} mx='10%' mb='10%'>
        <Box display='flex' justifyContent='space-between'>
          <HQIcon mt='4%' mr='4%' />
          <Box>
            <Heading fontSize='xs' color='#1A97CF'>
              HQ Office
            </Heading>
            <Text fontSize='xs' w='60%'>
              50 Ebitu Ukiwe Street, Jabi. Abuja, Nigeria.
            </Text>
          </Box>
        </Box>
        <Box display='flex' justifyContent='space-between' mx='12%'>
          <ServiceCenter />
          <Box>
            <Heading fontSize='xs' color='#1A97CF'>
              Service Centers Near You
            </Heading>
            <Text fontSize='xs'>Click to search</Text>
          </Box>
        </Box>
        <Box display='flex' justifyContent='space-between' mx='19%'>
          <PhoneIcon mt='2%' />
          <Box>
            <Heading fontSize='xs' color='#1A97CF'>
              Phone
            </Heading>
            <Text fontSize='xs'>+234 (0) 701 1240 898</Text>
          </Box>
        </Box>
      </SimpleGrid>

      <GetQuote />
      <Footer />
    </Box>
  );
}

export default Contact;
