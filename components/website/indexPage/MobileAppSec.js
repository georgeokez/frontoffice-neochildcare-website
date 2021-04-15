import {
  Box,
  Image,
  Link,
  Button,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

function MobileAppSec() {
  return (
    <>
      <Box
        height='60vh'
        bg="url('https://res.cloudinary.com/dutzmwqpe/image/upload/v1606332746/Rectangle_1716_ckeotr.svg')"
        bgPosition='center'
        display='flex'
        justifyContent={{ md: 'space-between', xl: 'space-between' }}
        bgRepeat='no-repeat'
        position='relative'
      >
        <Box
          position='absolute'
          color='white'
          zIndex={5}
          my={{ base: '5', md: '60', xl: '20' }}
          mx={{ base: '0', md: '10', xl: '40' }}
          ml={{ base: '10', md: '10', xl: '40' }}
        >
          <Heading fontSize={{ base: 'xs', md: '2xl', xl: '2xl' }}>
            Get the Mobile App
          </Heading>
          <Text fontSize='xs' w={{ base: '95%', md: '55%', xl: '85%' }}>
            Get our services stright from your mobile app
          </Text>
          <Box
            display='flex'
            justifyContent='space-around'
            mt='6'
            w={{ base: '85%', md: '55%', xl: '60%' }}
          >
            <Button
              _hover={{ bg: 'white', color: '#1A97CF' }}
              variant='outline'
              leftIcon={
                <FaApple
                  style={{
                    fontSize: '25px',
                  }}
                />
              }
              display='flex'
              justifyContent='space-around'
              px={{ base: '3', md: '10', lg: '6' }}
              py='6'
              mx='1'
            >
              <Box
                dispaly='flex'
                flexDirection='column'
                fontSize='xs'
                textAlign='left'
                fontWeight='100'
              >
                <Text fontSize='sm'> App Store </Text>
                <Text>Get it on</Text>
              </Box>
            </Button>
            <Button
              _hover={{ bg: 'white', color: '#1A97CF' }}
              variant='outline'
              leftIcon={
                <FaGooglePlay
                  style={{
                    fontSize: '20px',
                  }}
                />
              }
              display='flex'
              justifyContent='space-around'
              px={{ base: '3', md: '10', lg: '6' }}
              py='6'
              mx='1'
            >
              <Box
                dispaly='flex'
                flexDirection='column'
                fontSize='xs'
                textAlign='left'
                fontWeight='100'
              >
                <Text fontSize='sm'> Google Play </Text>
                <Text>Get it on</Text>
              </Box>
            </Button>
          </Box>
        </Box>

        <Image
          src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606386944/Rectangle_4_rzi4lr.svg'
          w={{ base: '57%', md: '34%', xl: '100%' }}
          ml={{ base: '20%', md: '60%' }}
          pt={['60%', '20%', '10%', '3%']}
        />
      </Box>

      <SimpleGrid
        columns={{ base: '2', md: '4', xl: '4' }}
        spacing='20'
        py='10'
        px={{ base: '20', md: '20', xl: '10%' }}
        textAlign='center'
        rounded='lg'
        bg='rgba(26, 151, 207, 0.1)
'
      >
        <Box display='flex' justifyContent='center' flexDirection='column'>
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606420950/Frame_1_wzdz5w.svg'
            alt='request-inspection'
          />
          <Text fontSize='xs' fontWeight='600'>
           Request Services
          </Text>
        </Box>

        <Box display='flex' justifyContent='center' flexDirection='column'>
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606421471/Frame_vwfgs4.svg'
            alt='Segun Adebayo'
          />
          <Text fontSize='xs' fontWeight='600'>
            Bookmark Services
          </Text>
        </Box>

        <Box display='flex' justifyContent='center' flexDirection='column'>
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606420840/Frame_jdjgvc.svg'
            alt='Segun Adebayo'
          />
          <Text fontSize='xs' fontWeight='600'>
            Get Daily Tips
          </Text>
        </Box>

        <Box display='flex' justifyContent='center' flexDirection='column'>
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606421061/Frame_2_udcurb.svg'
            alt='Segun Adebayo'
          />
          <Text fontSize='xs' fontWeight='600'>
            Service reminders
          </Text>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default MobileAppSec;
