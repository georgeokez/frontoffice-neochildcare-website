import { Box, Image, Heading, Text, Link, Divider } from '@chakra-ui/react';
import React, { Component } from 'react';
import Slider from 'react-slick';

const Packs = [
  {
    id: 1,
    url:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1606463458/Rectangle_1693_xeeraw.svg',
    Topic: 'BMW Door Lock Replacement',
    Text:
      'Nulla Lorem mollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
  },
  {
    id: 2,
    url:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1606463480/Rectangle_1695_qxxp8b.svg',
    Topic: 'BMW Door Lock Replacement',
    Text:
      'Nulla Lorem mollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
  },
  {
    id: 3,
    url:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1606463585/Rectangle_1694_ezwliq.svg',
    Topic: 'BMW Door Lock Replacement',
    Text:
      'Nulla Lorem mollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
  },
  {
    id: 4,
    url:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1606463585/Rectangle_1694_ezwliq.svg',

    Topic: 'BMW Door Lock Replacement',
    Text:
      'Nulla Lorem mollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
  },
  {
    id: 5,
    url:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1606463458/Rectangle_1693_xeeraw.svg',
    Topic: 'BMW Door Lock Replacement',
    Text:
      'Nulla Lorem mollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
  },
  {
    id: 6,
    url:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1606463480/Rectangle_1695_qxxp8b.svg',
    Topic: 'BMW Door Lock Replacement',
    Text:
      'Nulla Lorem mollit cupidatat irure.Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
  },
];

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centered: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Box my='10%'>
        <Slider {...settings}>
          {Packs.map((pack) => {
            return (
              <Box>
                <Box width='90%' mx='5'>
                  <Image src={pack.url} />
                  <Heading fontSize='xs'>{pack.Topic}</Heading>
                  <Text fontSize='xs'>{pack.Text}</Text>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Box>
    );
  }
}
