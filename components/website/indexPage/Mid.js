import {
  Box,
  Image,
  Divider,
  SimpleGrid,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

import allIcons from '../../dashboard/icons/Icons';

function Mid() {
  const { QuackeryIcon } = allIcons;
  const { DishonestyIcon } = allIcons;
  const { DelayIcon } = allIcons;

  return (
    <>
      <Box>
        <Box
          display='flex'
          justifyContent={{ base: 'center', md: 'center', xl: 'flex-end' }}
          flexDirection={{ base: 'column', md: 'column', xl: 'row' }}
          mr={10}
          my={20}
        >
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
            <Heading
              fontSize={{ base: 'xl', md: '2xl' }}
              w={{ base: '90%', md: '90%', xl: '100%' }}
              ml={{ base: '10', md: '20', xl: '60' }}
              textAlign={{ base: 'center', xl: 'left' }}
              lineHeight='1.4'
            >
              {' '}
              We are solving these problems for car/fleet owners
            </Heading>
            <Text
              w={{ base: '100%', md: '60%', xl: '70%' }}
              ml={{ base: '10', xl: '0' }}
              textAlign='center'
              fontSize='sm'
            >
              Jiffix is bringing accountability, professionalism and standard
              engineering practice to every repair/inspection
            </Text>
            <Divider
              orientation='horizontal'
              width='10%'
              borderBottom='3px solid #65617D'
              py={2}
              ml={10}
            />
          </Box>

          <Link href='/call'>
            <Image
              src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606312428/Group_2657_yttgdc.svg'
              alt='contact'
              w={{ base: '60%', md: '30%', xl: '70%' }}
              mx={{ base: '25%', md: '37%', xl: '0' }}
            />
          </Link>
        </Box>

        <SimpleGrid
          columns={{ base: '1', md: '3', xl: '3' }}
          spacing='8'
          mx={{ base: '10', md: '10', xl: '40' }}
          textAlign='center'
          rounded='lg'
          color='#65617D'
        >
          <Box boxShadow='xs' p='6' rounded='sm' bg='white'>
            <Box
              bg='rgba(84, 26, 209, 0.15)'
              w='100px'
              h='100px'
              borderRadius='50%'
              d='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Box>
                <DishonestyIcon />
              </Box>
            </Box>
            <Heading fontSize='xs' ml={2} float='left'>
              QUACKERY
            </Heading>
            <Text mt={10} ml={2} textAlign='left' fontSize='xs'>
              Our qualified, experienced and trained Experts are assigned jobs
              based on area of specialization/training. Thorough diagnosis and
              OE repair procedures followed.
            </Text>
          </Box>

          <Box boxShadow='xs' p='6' rounded='sm' bg='white'>
            <Box
              bg='rgba(205, 125, 15, 0.1)'
              w='100px'
              h='100px'
              borderRadius='50%'
              d='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Box>
                <QuackeryIcon />
              </Box>
            </Box>
            <Heading fontSize='xs' ml={2} float='left'>
              DISHONESTY
            </Heading>
            <Text mt={10} ml={2} textAlign='left' fontSize='xs'>
              Total transparency about what is wrong with the car, parts
              replaced or repaired, fair and transparent pricing with warranties
              of up to 12 months on parts and services.
            </Text>
          </Box>

          <Box boxShadow='xs' p='6' rounded='sm' bg='white'>
            <Box
              bg='rgba(234, 26, 44, 0.1)'
              w='100px'
              h='100px'
              borderRadius='50%'
              d='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Box>
                <DelayIcon />
              </Box>
            </Box>

            <Heading
              fontSize='xs'
              textAlign='left'
              mt={2}
              lineHeight={{ base: '1.6', md: '1.6', xl: '0' }}
              ml={2}
              float='left'
            >
              DELAY IN SERVICE DELIVERY
            </Heading>
            <Text mt={10} ml={2} textAlign='left' fontSize='xs'>
              Get instant quotation, skip the long garage queue/waiting time,
              schedule repairs and our Experts come to you at home or office.
            </Text>
          </Box>
        </SimpleGrid>

        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          my={10}
        >
          <Heading
            fontSize={{ base: 'xl', md: '2xl' }}
            textAlign='center'
            w={{ base: '90%', md: '70%', xl: '50%' }}
            lineHeight='1.4'
          >
            {' '}
            Jiffix one-stop vehicle management platform
          </Heading>
          <Text
            w={{ base: '80%', md: '60%', xl: '40%' }}
            textAlign='center'
            fontSize='sm'
          >
            Leverage technology for a stress-free, easy, fast, efficient and
            accountable repair experienced with Jiffix.
          </Text>
          <Divider
            orientation='horizontal'
            width='5%'
            borderBottom='3px solid #65617D'
            py={2}
          />
        </Box>
      </Box>
    </>
  );
}

export default Mid;
