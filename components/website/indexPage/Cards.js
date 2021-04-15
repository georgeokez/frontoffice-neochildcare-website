import React, { Component } from 'react';
import { Box, Image, Heading, Text, Link } from '@chakra-ui/react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
    };
    return (
      <Box>
        <Slider {...settings}>
          {/* Box 1 */}
          <Box>
            <Box
              color='white'
              width={{ base: '80%', xl: '80%' }}
              ml='10%'
              mt={{ base: '0', xl: '0' }}
              mx='auto'
              bg='#9B70F8'
              borderRadius='5px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            >
              <Box
                bg='white'
                opacity='0.2'
                mx='auto'
                w='70px'
                h='70px'
                mt='5'
                borderRadius='50%'
                d='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Heading color='grey' py={{ xl: '7' }}>
                  1
                </Heading>
              </Box>
              <Heading fontSize='sm'>REQUEST INSPECTION</Heading>
              <Text
                px={{ base: '8%', md: '28%', xl: '30%' }}
                textAlign='center'
                fontSize='xs'
              >
                In 2-clicks, inspection of your vehicles can be scheduled at
                your home or office.
              </Text>
              <Image
                src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606805577/Group_2660_sy6aid.svg'
                style={{ height: '50%', width: '50%', paddingBottom: '1%' }}
                mx='auto'
              />
            </Box>
          </Box>

          {/* Box 2 */}

          <Box>
            <Box
              color='white'
              width={{ base: '80%', xl: '80%' }}
              ml='10%'
              mt={{ base: '0', xl: '0' }}
              mx='auto'
              bg='#F86A76'
              borderRadius='5px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            >
              <Box
                bg='white'
                opacity='0.2'
                mx='auto'
                w='70px'
                h='70px'
                mt='5'
                borderRadius='50%'
                d='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Heading color='grey' py={{ xl: '7' }}>
                  2
                </Heading>
              </Box>
              <Heading fontSize='sm'>BOOK REPAIR/MAINTENANCE</Heading>
              <Text
                px={{ base: '8%', md: '28%', xl: '30%' }}
                textAlign='center'
                fontSize='xs'
              >
                Get instant quote on repairs and schedule a convenient time. A
                Jiffix Expert is assigned.
              </Text>
              <Image
                src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606811730/Group_2665_v628ax.svg'
                style={{ height: '50%', width: '50%', paddingBottom: '1%' }}
                mx='auto'
              />
            </Box>
          </Box>

          {/* Box 3 */}

          <Box>
            <Box
              color='white'
              width={{ base: '80%', xl: '80%' }}
              ml='10%'
              mt={{ base: '0', xl: '0' }}
              mx='auto'
              bg='#57C5F6'
              borderRadius='5px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            >
              <Box
                bg='white'
                opacity='0.2'
                mx='auto'
                w='70px'
                h='70px'
                mt='5'
                borderRadius='50%'
                d='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Heading color='grey' py={{ xl: '7' }}>
                  3
                </Heading>
              </Box>
              <Heading fontSize='sm'>VEHICLE HEALTH REPORT</Heading>
              <Text
                px={{ base: '8%', md: '28%', xl: '30%' }}
                textAlign='center'
                fontSize='xs'
              >
                Jiffix inspection report tells you the health status of your
                vehicles after every repair activity, and what needs attention.
              </Text>
              <Image
                src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606812075/Group_2669_uyiiyf.svg'
                style={{ height: '50%', width: '50%', paddingBottom: '1%' }}
                mx='auto'
              />
            </Box>
          </Box>

          {/* Box 4 */}

          <Box>
            <Box
              color='white'
              width={{ base: '80%', xl: '80%' }}
              ml='10%'
              mt={{ base: '0', xl: '0' }}
              mx='auto'
              bg='#4BCF58'
              borderRadius='5px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            >
              <Box
                bg='white'
                opacity='0.2'
                mx='auto'
                w='70px'
                h='70px'
                mt='5'
                borderRadius='50%'
                d='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Heading color='grey' py={{ xl: '7' }}>
                  4
                </Heading>
              </Box>
              <Heading fontSize='sm'>REPAIR HISTORY & REMINDERS</Heading>
              <Text
                px={{ base: '8%', md: '28%', xl: '30%' }}
                textAlign='center'
                fontSize='xs'
              >
                Our digital Log Book tells you when your next vehicle
                maintenance is due.
              </Text>
              <Image
                src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606812437/Group_2665_1_u7g4pk.svg'
                style={{ height: '50%', width: '50%', paddingBottom: '1%' }}
                mx='auto'
              />
            </Box>
          </Box>

          {/* Box 5 */}

          <Box>
            <Box
              color='white'
              width={{ base: '80%', xl: '80%' }}
              ml='10%'
              mt={{ base: '0', xl: '0' }}
              mx='auto'
              bg='#4CCCCA'
              borderRadius='5px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
            >
              <Box
                bg='white'
                opacity='0.2'
                mx='auto'
                w='70px'
                h='70px'
                mt='5'
                borderRadius='50%'
                d='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Heading color='grey' py={{ xl: '7' }}>
                  5
                </Heading>
              </Box>
              <Heading fontSize='sm'>PREMIUM SERVICES</Heading>
              <Text
                px={{ base: '8%', md: '28%', xl: '30%' }}
                textAlign='center'
                fontSize='xs'
              >
                Other premium services to enable your safe, reliable and
                unhindered mobility
              </Text>
              <Image
                src='https://res.cloudinary.com/dutzmwqpe/image/upload/v1606813094/Group_2672_w9azqw.svg'
                style={{ height: '50%', width: '50%', paddingBottom: '1%' }}
                mx='auto'
              />
            </Box>
          </Box>
        </Slider>
      </Box>
    );
  }
}
