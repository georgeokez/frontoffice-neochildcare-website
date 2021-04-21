import React, { Component } from "react";
import { Box, Image, Heading, Text, Link } from "@chakra-ui/react";
import Nav from "../common/Nav";
import Header from "./Header";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class TopCarousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,

      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Box
        w="100%"
        h="100vh"
        position="relative"
        backgroundImage="url(andrae-ricketts-3Qi0PkM_Wes-unsplash.jpg)"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="cover"
        d="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box textAlign="center" zIndex="10">
          <Text
            fontSize="3rem"
            as="h2"
            color="orange.500"
            fontWeight="600"
            textShadow="2xl"
          >
            Our Belief is Simple...{" "}
          </Text>
          <Text
            w="65%"
            mx="auto"
            fontSize="1.5rem"
            color="whitesmoke"
            fontWeight="400"
          >
            That every child, everywhere, regardless of tribe, ethnicity, race,
            religion or social strata deserves an optimal shot at life!
          </Text>
        </Box>
        {/* <Image
          src="/andrae-ricketts-3Qi0PkM_Wes-unsplash.jpg"
          w="100%"
          h="100%"
        /> */}
        <Box
          position="absolute"
          w="100%"
          h="100%"
          top="0"
          left="0"
          bg="rgba(44, 130, 201, .7)"
          zIndex="0"
        ></Box>
        {/* <Slider {...settings}
          <Box
            bg="url('/Group 32.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Header
              text1="Relevant
              Health Information"
              text2="We keep caregivers empowered with knowledge to safeguard the healthcare of children"
            />
          </Box>
          <Box
            bg="url('/Group 32 (1).png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Header
              text1="Virtual Consultations
              with Qualified Professionals"
              text2="Redefining the way caregivers access healthcare for their children by connecting them with qualified healthcare professionals in real time to support the quality of care in school or at home."
            />
          </Box>
          <Box
            bg="url('/Group 33.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Header
              text1="Mobile Health Service"
              text2="Starting with ‘Jojolo’, our Mobile Sick Bay, we aim to reach children in schools, homes, communities and public events with access to routine health screenings, vaccinations and emergency services."
            />
          </Box>
        </Slider> */}
      </Box>
    );
  }
}
