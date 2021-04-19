import {
  Box,
  Image,
  Link,
  Button,
  Heading,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function MobileAppSec() {
  return (
    <>
      <Box
        height="60vh"
        bg="url('https://res.cloudinary.com/dutzmwqpe/image/upload/v1606332746/Rectangle_1716_ckeotr.svg')"
        bgPosition="center"
        display="flex"
        justifyContent={{ md: "space-between", xl: "space-between" }}
        bgRepeat="no-repeat"
        position="relative"
      >
        <Box
          position="absolute"
          color="white"
          zIndex={5}
          my={{ base: "5", md: "60", xl: "20" }}
          mx={{ base: "0", md: "10", xl: "40" }}
          ml={{ base: "10", md: "10", xl: "40" }}
        >
          <Heading fontSize={{ base: "xs", md: "2xl", xl: "2xl" }}>
            Get the Jojolo Mobile App
          </Heading>
          <Text fontSize="xs" w={{ base: "95%", md: "55%", xl: "85%" }}>
            Get our services stright from your mobile app
          </Text>
          <Box
            display="flex"
            justifyContent="space-around"
            mt="6"
            w={{ base: "85%", md: "55%", xl: "80%" }}
          >
            <Button
              _hover={{ bg: "white", color: "#1A97CF" }}
              variant="outline"
              leftIcon={
                <FaApple
                  style={{
                    fontSize: "25px",
                  }}
                />
              }
              display="flex"
              justifyContent="space-around"
              px={{ base: "3", md: "10", lg: "6" }}
              py="6"
              mx="1"
            >
              <Box
                dispaly="flex"
                flexDirection="column"
                fontSize="xs"
                textAlign="left"
                fontWeight="100"
              >
                <Text fontSize="sm"> App Store </Text>
                <Text>Get it on</Text>
              </Box>
            </Button>
            <Button
              _hover={{ bg: "white", color: "#1A97CF" }}
              variant="outline"
              leftIcon={
                <FaGooglePlay
                  style={{
                    fontSize: "20px",
                  }}
                />
              }
              display="flex"
              justifyContent="space-around"
              px={{ base: "3", md: "10", lg: "6" }}
              py="6"
              mx="1"
            >
              <Box
                dispaly="flex"
                flexDirection="column"
                fontSize="xs"
                textAlign="left"
                fontWeight="100"
              >
                <Text fontSize="sm"> Google Play </Text>
                <Text>Get it on</Text>
              </Box>
            </Button>
          </Box>
        </Box>

        <Image
          src="https://res.cloudinary.com/dutzmwqpe/image/upload/v1606386944/Rectangle_4_rzi4lr.svg"
          w={{ base: "57%", md: "34%", xl: "100%" }}
          ml={{ base: "20%", md: "60%" }}
          pt={["60%", "20%", "10%", "3%"]}
        />
      </Box>
    </>
  );
}

export default MobileAppSec;
