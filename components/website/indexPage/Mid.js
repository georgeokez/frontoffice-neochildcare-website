import {
  Box,
  Image,
  Divider,
  SimpleGrid,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";

import allIcons from "../../dashboard/icons/Icons";
import { motion } from "framer-motion";

function Mid() {
  const { QuackeryIcon } = allIcons;
  const { DishonestyIcon } = allIcons;
  const { DelayIcon } = allIcons;

  const MotionBox = motion(Box);

  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent={{ base: "center", md: "center" }}
          flexDirection={{ base: "column", md: "column", xl: "row" }}
          my={20}
        >
          <Box>
            <Heading
              fontSize={{ base: "xl", md: "2xl" }}
              // w={{ base: "90%", md: "90%", xl: "100%" }}
              lineHeight="1.4"
              textAlign="center"
            >
              {" "}
              What we Aim to Solve
            </Heading>
            <Text
              w={{ base: "100%", md: "60%", xl: "100%" }}
              ml={{ base: "10", xl: "0" }}
              textAlign="center"
              fontSize="sm"
            >
              We want to help every African child access Healthcare and have a
              delightful experience while at it
            </Text>
            {/* <Divider
              orientation="horizontal"
              width="10%"
              borderBottom="3px solid #65617D"
              py={2}
              ml={10}
            /> */}
          </Box>

          {/* <Link href="/call">
            <Image
              src="https://res.cloudinary.com/dutzmwqpe/image/upload/v1606312428/Group_2657_yttgdc.svg"
              alt="contact"
              w={{ base: "60%", md: "30%", xl: "70%" }}
              mx={{ base: "25%", md: "37%", xl: "0" }}
            />
          </Link> */}
        </Box>

        <SimpleGrid
          columns={{ base: "1", md: "3", xl: "3" }}
          spacing="8"
          mx={{ base: "10", md: "10", xl: "40" }}
          textAlign="center"
          rounded="lg"
          color="#65617D"
        >
          <Box boxShadow="xs" p="6" rounded="sm" bg="white">
            <Box
              bg="rgba(84, 26, 209, 0.15)"
              w="100px"
              h="100px"
              borderRadius="50%"
              d="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <DishonestyIcon />
              </Box>
            </Box>
            <Heading fontSize="xs" mt="5px" ml={2} float="left">
              Afordable HealthCare
            </Heading>
            <Text mt={10} ml={2} textAlign="left" fontSize="xs">
              By bringing quality and affordable healthcare as closely to
              children as possible with a pop-up clinic that can be set up
              anywhere, even in school.
            </Text>
          </Box>

          <Box boxShadow="xs" p="6" rounded="sm" bg="white">
            <Box
              bg="rgba(205, 125, 15, 0.1)"
              w="100px"
              h="100px"
              borderRadius="50%"
              d="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <QuackeryIcon />
              </Box>
            </Box>
            <Heading fontSize="xs" mt="5px" ml={2} float="left">
              Technology
            </Heading>
            <Text mt={10} ml={2} textAlign="left" fontSize="xs">
              By leveraging the use of mobile technology (SMS, WhatsApp, Blog)
              to empower caregivers with the knowledge they need to safeguard
              the health and wellbeing of their children.
            </Text>
          </Box>

          <Box boxShadow="xs" p="6" rounded="sm" bg="white">
            <Box
              bg="rgba(234, 26, 44, 0.1)"
              w="100px"
              h="100px"
              borderRadius="50%"
              d="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <DelayIcon />
              </Box>
            </Box>

            <Heading
              fontSize="xs"
              textAlign="left"
              mt={2}
              lineHeight={{ base: "1.6", md: "1.6", xl: "0" }}
              ml={2}
              float="left"
              mt="5px"
            >
              Appointments
            </Heading>
            <Text mt={10} ml={2} textAlign="left" fontSize="xs">
              By connecting caregivers with childcare providers for home/clinic
              appointments.
            </Text>
          </Box>
        </SimpleGrid>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          my={10}
        ></Box>
      </Box>
    </>
  );
}

export default Mid;
