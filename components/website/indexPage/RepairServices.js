import {
  Box,
  Image,
  Divider,
  SimpleGrid,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

function RepairServices() {
  return (
    <>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        mt={20}
      >
        <Heading
          fontSize={{ base: 'xl', md: '2xl' }}
          lineHeight='1.4'
          w='90%'
          textAlign='center'
        >
          Service
        </Heading>
        <Text
          w={{ base: '60%', md: '60%', xl: '40%' }}
          textAlign='center'
          fontSize='sm'
        >
          Here are some of the most on demand  services
        </Text>
        <Divider
          orientation='horizontal'
          width='5%'
          borderBottom='3px solid #65617D'
          py={2}
        />
      </Box>

      <SimpleGrid
        columns={{ base: '1', md: '1', xl: '5' }}
        spacing='8'
        py='10'
        px={{ base: '20', md: '20', xl: '10' }}
        textAlign='center'
        rounded='lg'
        color='#65617D;
'
      >
        <Box
          boxShadow='xs'
          px='6'
          py='8'
          rounded='md'
          bg='white'
          bg='#F9FAFC'
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606330259/Vector_10_shbaz2.svg'
            alt='oil-and-filter change'
          />
          <Heading fontSize='xs' lineHeight='2'>
            {' '}
            
          </Heading>
        </Box>

        <Box
          boxShadow='xs'
          px='6'
          py='8'
          rounded='md'
          bg='white'
          bg='#F9FAFC'
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606330850/Vector_11_zignt4.svg'
            alt='shock-absorber'
          />
          <Heading fontSize='xs' lineHeight='2'>
            
          </Heading>
        </Box>

        <Box
          boxShadow='xs'
          px='6'
          py='8'
          rounded='md'
          bg='white'
          bg='#F9FAFC'
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606330881/Vector_12_wab0cq.svg'
            alt='stabilizer-bar-link'
          />
          <Heading fontSize='xs' lineHeight='2'>
           
          </Heading>
        </Box>

        <Box
          boxShadow='xs'
          px='6'
          py='8'
          rounded='md'
          bg='white'
          bg='#F9FAFC'
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606330892/Vector_13_o4ft62.svg'
            alt='bushing-replacements'
          />
          <Heading fontSize='xs' lineHeight='2'>
            
          </Heading>
        </Box>

        <Box
          boxShadow='xs'
          px='6'
          py='8'
          rounded='md'
          bg='white'
          bg='#F9FAFC'
          display='flex'
          justifyContent='center'
          flexDirection='column'
        >
          <Image
            src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606330900/Group_1_olzhv3.svg'
            alt='fluid-leak-repairs'
          />
          <Heading fontSize='xs' lineHeight='2'>
            
          </Heading>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default RepairServices;
