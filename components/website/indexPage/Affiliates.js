import GetQuote from "../common/GetQuote";
import {
  Box,
  Image,
  Button,
  Heading,
  Text,
  Divider,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";

function Affiliates() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={10}
      >
        <Heading fontSize={{ base: "xl", md: "2xl" }}>Our Affiliates</Heading>
        <Text
          w={{ base: "60%", md: "60%", xl: "40%" }}
          textAlign="center"
          fontSize="sm"
        >
          Here are some of the clients and partners we have worked with.
        </Text>
        <Divider
          orientation="horizontal"
          width="5%"
          borderBottom="3px solid #65617D"
          py={2}
        />
      </Box>
      <SimpleGrid
        columns={{ base: "2", md: "2", xl: "4" }}
        spacing="8"
        px={{ base: "20", md: "30%", xl: "20%" }}
        py="20"
        textAlign="center"
        rounded="lg"
      >
        <Image
          src="https://res.cloudinary.com/dutzmwqpe/image/upload/v1606336340/Rectangle_2_fhgwju.svg"
          alt="Castrol"
        />
        <Image
          src="https://res.cloudinary.com/dutzmwqpe/image/upload/v1606336349/Rectangle_3_lbbypn.svg"
          alt="GeoNel"
        />
        <Image
          src="https://res.cloudinary.com/dutzmwqpe/image/upload/v1606336357/ami-logo-rgb-118d75c946cfb74a5115f3c4da8e86b2_1_kon8so.svg"
          alt="AMI"
        />
        <Image
          src="https://res.cloudinary.com/dutzmwqpe/image/upload/v1606336366/logo_1_1_g33isv.svg"
          alt="Wennovation"
        />
      </SimpleGrid>
      <GetQuote />
    </>
  );
}

export default Affiliates;
