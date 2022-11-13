import { Box, Flex, Grid, GridItem, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";

export const Enjoylife = () => {
  return (
    <Stack border={"1px"} width={"90%"} m={"auto"} mt={"10"}>
      <Box p={9}>
        <Box>
          <Heading fontSize={{ base: "0.7rem", md: "1.2rem", lg: "1.7rem" }} mb={5}>
            Enjoy Life
          </Heading>
        </Box>
        <HStack flexDirection={["column", "row", "row"]}>
          <Image
            src={"https://img.gkbcdn.com/bn/2209/500x632-63326e5e2b40c9222cacb303._p1_.jpg"}
            width={{ base: "25em", md: "32em", lg: "45em" }}
            height={{ base: "22em", md: "30em", lg: "40em" }}
          />
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap={10}
            width={"70%"}
            height={"100%"}
            templateRows={{ base: "repeat(1,1fr)", md: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
          >
            <GridItem bgColor={"blue.50"} p={3} width={"fit-content"}>
              <Text fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }} fontWeight={"semibold"} pb={3}>
                Go outside for fun and health
              </Text>
              <Flex gap={"10"}>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2209/210x2107-63326fb32b40c9222cacb304._p1_.jpg"}
                    borderRadius={"md"}
                  />

                  <Text color={"blue"} fontSize={{ base: "0.5 rem", md: "0.7rem", lg: "1rem" }} py={1}>
                    Premium e-mobility
                  </Text>
                </Box>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2205/210x2104-62902c152b40c91cb09e7ada._p1_.jpg"}
                    borderRadius={"md"}
                  />

                  <Text color={"blue"} fontSize={{ base: "0.5 rem", md: "0.7rem", lg: "1rem" }} py={1}>
                    Premium e-mobility
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem bgColor={"blue.50"} p={3} width={"fit-content"}>
              <Text fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }} fontWeight={"semibold"} pb={3}>
                Unleash maximum productivity
              </Text>
              <Flex gap={"10"}>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2209/210x2106-633270272b40c9222cacb305._p1_.jpg"}
                    borderRadius={"md"}
                  />
                  <Text color={"blue"}>Get the laptops you need</Text>
                </Box>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2209/210x2101-6332707e2b40c9222cacb306._p1_.jpg"}
                    borderRadius={"md"}
                  />

                  <Text color={"blue"} fontSize={{ base: "0.5 rem", md: "0.7rem", lg: "1rem" }} py={1}>
                    Create your workspace
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem bgColor={"blue.50"} p={3} width={"fit-content"}>
              <Text fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }} fontWeight={"semibold"} pb={3}>
                Easy & efficient home solutions
              </Text>
              <Flex gap={"10"}>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2209/210x2102-633270c32b40c9222cacb307._p1_.jpg"}
                    borderRadius={"md"}
                  />

                  <Text color={"blue"} fontSize={{ base: "0.5 rem", md: "0.7rem", lg: "1rem" }} py={1}>
                    Smart tech for cleaning
                  </Text>
                </Box>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2209/210x2102-633270c32b40c9222cacb307._p1_.jpg"}
                    borderRadius={"md"}
                  />

                  <Text color={"blue"} fontSize={{ base: "0.5 rem", md: "0.7rem", lg: "1rem" }} py={1}>
                    Easy pet cleanup
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem bgColor={"blue.50"} p={3} width={"fit-content"}>
              <Text fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1.2rem" }} fontWeight={"semibold"} pb={3}>
                Let's play together
              </Text>
              <Flex gap={"10"}>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2209/210x2105-633272852b40c9222cacb30a._p1_.jpg"}
                    borderRadius={"md"}
                  />

                  <Text color={"blue"} fontSize={{ base: "0.5 rem", md: "0.7rem", lg: "1rem" }} py={1}>
                    Game consoles
                  </Text>
                </Box>
                <Box>
                  <Image
                    src={"https://img.gkbcdn.com/bn/2209/210x2104-633272352b40c9222cacb309._p1_.jpg"}
                    borderRadius={"md"}
                  />

                  <Text color={"blue"} fontSize={{ base: "0.5 rem", md: "0.7rem", lg: "1rem" }} py={1}>
                    Portable outdoor speakers
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
          )
        </HStack>
      </Box>
    </Stack>
  );
};
