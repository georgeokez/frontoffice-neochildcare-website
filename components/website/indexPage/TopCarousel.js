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
      <Box>
        <Slider {...settings}>
          <Box
            bg="url('/about_neo.jpg')"
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
            bg="url('/neo-childcare_dentist.jpeg')"
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
            bg="url('/blog-post-2_9.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Header
              text1="Mobile Health Service"
              text2="Starting with ‘Jojolo’, our Mobile Sick Bay, we aim to reach children in schools, homes, communities and public events with access to routine health screenings, vaccinations and emergency services."
            />
          </Box>
        </Slider>
      </Box>
    );
  }
}
