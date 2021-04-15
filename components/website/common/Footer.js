import {
  Box,
  Image,
  Button,
  Heading,
  Text,
  SimpleGrid,
  Link,
} from '@chakra-ui/react';
import { List, ListItem } from '@chakra-ui/react';
import { AiFillApple } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <Box
        bg=' #1A97CF;
'
      >
        <SimpleGrid
          columns={{ base: '2', md: '3', xl: '6' }}
          spacing='8'
          pl={{ base: '4', md: '20', xl: '10' }}
          py='10'
          textAlign='left'
          color='white'
        >
          <Box>
            <Heading fontSize='xs'>MOBILE</Heading>
            <Button
              _hover={{ bg: 'white', color: '#1A97CF' }}
              variant='outline'
              leftIcon={<AiFillApple fontSize='2xl' />}
              display='flex'
              justifyContent='space-around'
              p='6'
              mb='2'
              width='70%'
              mx='1'
            >
              <Box
                dispaly='flex'
                flexDirection='column'
                fontSize='xs'
                textAlign='left'
                fontWeight='100'
              >
                <Text fontSize={{ base: 'xs', md: 'sm', xl: 'sm' }}>
                  {' '}
                  App Store{' '}
                </Text>
                <Text>Get it on</Text>
              </Box>
            </Button>
            <Button
              _hover={{ bg: 'white', color: '#1A97CF' }}
              variant='outline'
              leftIcon={<FaGooglePlay fontSize='2xl' />}
              display='flex'
              justifyContent='space-around'
              width='70%'
              p='6'
              mt='2'
              mx='1'
            >
              <Box
                dispaly='flex'
                flexDirection='column'
                fontSize='xs'
                textAlign='left'
                fontWeight='100'
              >
                <Text fontSize={{ base: 'xs', md: 'sm', xl: 'sm' }}>
                  {' '}
                  Google Play{' '}
                </Text>
                <Text>Get it on</Text>
              </Box>
            </Button>
          </Box>

          <Box>
            <Heading fontSize='xs'>FOR MECHANICS</Heading>
            <List fontSize='xs' fontWeight='400' lineHeight='2.5'>
              <ListItem>
                <Link href='/'>
                  {' '}
                  <a>Lorem</a>{' '}
                </Link>
              </ListItem>
              <ListItem>
                <Link href='/'>
                  <a>Download Our Expert App </a>
                </Link>{' '}
              </ListItem>
            </List>
          </Box>

          <Box>
            <Heading fontSize='xs'>COMPANY</Heading>
            <List fontSize='xs' fontWeight='400' lineHeight='2.5'>
              <ListItem>
                <Link href='/faq'>
                  {' '}
                  <a> FAQ</a>{' '}
                </Link>
              </ListItem>
              <ListItem>
                <Link href='/blog'>
                  <a>Blog</a>
                </Link>{' '}
              </ListItem>
              <ListItem>
                <Link href='/blog'>
                  <a>Careers</a>
                </Link>{' '}
              </ListItem>
              <ListItem>
                <Link href='/services'>
                  <a>Services</a>{' '}
                </Link>{' '}
              </ListItem>
            </List>
          </Box>

          <Box>
            <Heading fontSize='xs'>LEGAL</Heading>
            <List fontSize='xs' fontWeight='400' lineHeight='2.5'>
              <Link>
                <ListItem> Terms of service</ListItem>
              </Link>
              <Link>
                <ListItem> Privacy Policy</ListItem>
              </Link>
            </List>
          </Box>

          <Box>
            <Heading fontSize='xs'>FOR PARTNERSHIPS</Heading>
            <List fontSize='xs' fontWeight='400' lineHeight='2.5'>
              <ListItem>
                <Link href='/'>
                  {' '}
                  <a>lorem</a>{' '}
                </Link>
              </ListItem>
              <ListItem>
                <Link href='/'>
                  <a>lorem</a>
                </Link>{' '}
              </ListItem>
              <ListItem>
                <Link href='/'>
                  <a>lorem</a>{' '}
                </Link>{' '}
              </ListItem>
              <ListItem>
                <Link href='/'>
                  <a>lorem</a>{' '}
                </Link>{' '}
              </ListItem>
            </List>
          </Box>

          <Box>
            <Heading fontSize='xs'>ADDRESS</Heading>
            <Text fontSize='xs' fontWeight='400' lineHeight='2.5' w='75%'>
              50 Ebitu Ukiwe Street, Abuja.
              <br />
              <Link href='/contact'>
                <a>+234(0)7011240898</a>
              </Link>
              <br />
              <Link href='/email'>
                <a>lorem@lorem.com</a>
              </Link>
            </Text>
          </Box>
        </SimpleGrid>

        <Text fontSize='xs' textAlign='center' pb={10} color='white'>
          © 2020 
        </Text>
      </Box>
    </>
  );
}

export default Footer;
