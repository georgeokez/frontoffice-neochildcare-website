import { Box, Image, Button, Heading, Text } from "@chakra-ui/react";
import { List, Link, ListItem } from "@chakra-ui/react";

function Header({ text1, text2 }) {
  return (
    <>
      <Box height="100vh">
        {/*The Navbar*/}

        <Box
          w={{ base: "100%", md: "100%", xl: "60%" }}
          px={{ base: "5", md: "20", xl: "20" }}
          pt={{ base: "40%", md: "50%", xl: "40" }}
          color="white"
        >
          <Heading
            lineHeight={{ base: "7", md: "10", xl: "10" }}
            textAlign="left"
            fontSize={{ base: "xl", md: "4xl", xl: "4xl" }}
            color="white"
          >
            {text1}
          </Heading>
          <Text fontSize="xs" mt={3} textAlign="left" color="white">
            {text2}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Header;
