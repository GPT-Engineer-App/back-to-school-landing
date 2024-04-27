// Landing page for Eplehuset's Back to School campaign
import { Box, Button, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaApple, FaPercent } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW="1200px" m="auto" p={5}>
      <Box as="header" w="full" p={5} bg="gray.100" mb={6}>
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg">
            Eplehuset
          </Heading>
          <Button leftIcon={<FaApple />} colorScheme="blackAlpha" variant="solid">
            Shop Now
          </Button>
        </Flex>
      </Box>

      <VStack spacing={8} align="stretch">
        <Box>
          <Image src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHByb2R1Y3RzfGVufDB8fHx8MTcxNDI2MjIzOXww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          <Heading as="h2" size="xl" my={4}>
            Back to School Sale!
          </Heading>
          <Text fontSize="lg">Exclusive offers for students starting their new semester. Save big on Apple products!</Text>
        </Box>

        <Flex justify="space-around" p={5} bg="gray.50">
          <VStack>
            <FaApple size="3em" />
            <Text fontSize="2xl">15% off on iPhones and Macs</Text>
            <Button leftIcon={<FaPercent />} colorScheme="teal" variant="solid">
              Shop iPhones
            </Button>
            <Button leftIcon={<FaPercent />} colorScheme="teal" variant="solid">
              Shop Macs
            </Button>
          </VStack>

          <VStack>
            <FaApple size="3em" />
            <Text fontSize="2xl">20% off on all accessories</Text>
            <Button leftIcon={<FaPercent />} colorScheme="orange" variant="solid">
              Shop Accessories
            </Button>
          </VStack>
        </Flex>
      </VStack>

      <Box as="footer" w="full" p={5} bg="gray.100" mt={6}>
        <Text align="center">© 2023 Eplehuset. All rights reserved.</Text>
      </Box>
    </Flex>
  );
};

export default Index;
