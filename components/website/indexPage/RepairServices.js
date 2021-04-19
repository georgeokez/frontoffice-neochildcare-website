import {
  Box,
  Image,
  Divider,
  SimpleGrid,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

function RepairServices() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={20}
      >
        <Heading
          fontSize={{ base: "xl", md: "2xl" }}
          lineHeight="1.4"
          w="90%"
          textAlign="center"
        >
          Our Core Values
        </Heading>
        <Text
          w={{ base: "60%", md: "60%", xl: "40%" }}
          textAlign="center"
          fontSize="sm"
        >
          Here are some of our core values
        </Text>
        <Divider
          orientation="horizontal"
          width="5%"
          borderBottom="3px solid #65617D"
          py={2}
        />
      </Box>

      <SimpleGrid
        columns={{ base: "1", md: "1", xl: "5" }}
        spacing="8"
        py="10"
        px={{ base: "20", md: "20", xl: "10" }}
        textAlign="center"
        rounded="lg"
        color="#65617D;
"
      >
        <Box
          boxShadow="xs"
          px="6"
          py="8"
          rounded="md"
          bg="white"
          bg="#F9FAFC"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mb="5px" color="blue.500" fontWeight="semibold" fontSize="18px">
            Communication
          </Box>
          <Box w="70%" mx="auto">
            <Image
              src="/support.png"
              alt="oil-and-filter change"
              w="50%"
              mx="auto"
            />
          </Box>

          <Heading fontSize="xs" lineHeight="2">
            {" "}
          </Heading>
        </Box>

        <Box
          boxShadow="xs"
          px="6"
          py="8"
          rounded="md"
          bg="white"
          bg="#F9FAFC"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mb="5px" color="blue.500" fontWeight="semibold" fontSize="18px">
            Innovation
          </Box>
          <Box w="70%" mx="auto">
            <Image
              src="/innovation.png"
              alt="shock-absorber"
              w="50%"
              mx="auto"
            />
          </Box>

          <Heading fontSize="xs" lineHeight="2"></Heading>
        </Box>

        <Box
          boxShadow="xs"
          px="6"
          py="8"
          rounded="md"
          bg="white"
          bg="#F9FAFC"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mb="5px" color="blue.500" fontWeight="semibold" fontSize="18px">
            Collaboration
          </Box>
          <Box w="70%" mx="auto">
            <Image
              src="/stats.png"
              alt="stabilizer-bar-link"
              w="50%"
              mx="auto"
            />
          </Box>

          <Heading fontSize="xs" lineHeight="2"></Heading>
        </Box>

        <Box
          boxShadow="xs"
          px="6"
          py="8"
          rounded="md"
          bg="white"
          bg="#F9FAFC"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mb="5px" color="blue.500" fontWeight="semibold" fontSize="18px">
            Consistency
          </Box>
          <Box w="70%" mx="auto">
            <Image
              src="/thinking.png"
              alt="bushing-replacements"
              w="50%"
              mx="auto"
            />
          </Box>

          <Heading fontSize="xs" lineHeight="2"></Heading>
        </Box>

        <Box
          boxShadow="xs"
          px="6"
          py="8"
          rounded="md"
          bg="white"
          bg="#F9FAFC"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Box mb="8px" color="blue.500" fontWeight="semibold" fontSize="18px">
            Compasion
          </Box>
          <Box w="70%" mx="auto">
            <Image
              src="/message.png"
              alt="fluid-leak-repairs"
              w="50%"
              mx="auto"
            />
          </Box>

          <Heading fontSize="xs" lineHeight="2"></Heading>
        </Box>
      </SimpleGrid>
    </>
  );
}

export default RepairServices;
