import React from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Image,
  Divider,
  SimpleGrid,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

function GetQuote() {
  return (
    <>
      <Box>
        <Box
          w="70%"
          textAlign="center"
          mx="auto"
          fontSize="20px"
          fontWeight="semibold"
        >
          Subscribe to our news later{" "}
        </Box>
        <SimpleGrid
          columns="1"
          p={{ base: "5", md: "10", xl: "10" }}
          mx={{ base: "5", md: "20", xl: "20" }}
          mb={["13%", , "8%"]}
          rounded="md"
          bg="blue.50"
        >
          <Box display="flex" justifyContent="space-around" alignItems="center">
            <Box w="50%" fontSize="sm" fontWeight="600" color="#1a97cf">
              <Input placeholder="Email...." bg="white" w="100%" />
            </Box>
            <Button
              fontSize="xs"
              bg="#1A97CF"
              borderRadius="3px"
              fontWeight="500"
              colorScheme="blue"
              px="7"
            >
              SUBSCRIBE
            </Button>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default GetQuote;
