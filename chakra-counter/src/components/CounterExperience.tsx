"use client";

import {
  Badge,
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, RepeatIcon } from "@chakra-ui/icons";
import { AnimatePresence, motion } from "framer-motion";
import { IncrementToast } from "@/components/IncrementToast";
import { useCounter } from "@/context/CounterContext";

const MotionBox = motion(Box);
const MotionButton = motion(Button);

export function CounterExperience() {
  const { count, increment, reset } = useCounter();
  const toast = useToast();

  const handleIncrement = () => {
    const nextCount = increment();

    toast({
      id: `counter-${nextCount}`,
      position: "bottom-left",
      duration: 2200,
      isClosable: false,
      render: () => <IncrementToast count={nextCount} />,
    });
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Box
      minH="100vh"
      overflow="hidden"
      bg="radial-gradient(circle at 20% 10%, rgba(116, 200, 152, 0.14), transparent 30%), radial-gradient(circle at 80% 20%, rgba(90, 140, 255, 0.10), transparent 28%), #090A0F"
    >
      <Container maxW="980px" py={{ base: 8, md: 14 }}>
        <VStack spacing={{ base: 8, md: 10 }} align="stretch">
          <HStack justify="space-between" align="center">
            <Badge
              px="3"
              py="1"
              borderRadius="full"
              color="#74C898"
              bg="rgba(116, 200, 152, 0.10)"
              border="1px solid rgba(116, 200, 152, 0.18)"
            >
              Chakra Counter
            </Badge>
            <Text fontSize="sm" color="whiteAlpha.600">
              TypeScript · React · Chakra UI
            </Text>
          </HStack>

          <Box maxW="720px">
            <Heading
              as="h1"
              fontSize={{ base: "42px", md: "72px" }}
              lineHeight="0.95"
              letterSpacing="-0.06em"
            >
              A counter with craft.
            </Heading>
            <Text mt="5" fontSize={{ base: "md", md: "xl" }} color="whiteAlpha.700" maxW="620px">
              A small interface built to show the details: global state, typed hooks, accessible controls,
              smooth feedback, and a toast that follows the provided design closely.
            </Text>
          </Box>

          <MotionBox
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            p={{ base: 5, md: 8 }}
            borderRadius="28px"
            bg="rgba(255,255,255,0.055)"
            border="1px solid rgba(255,255,255,0.10)"
            boxShadow="0 24px 80px rgba(0,0,0,0.38)"
            backdropFilter="blur(16px)"
          >
            <VStack spacing="8" align="stretch">
              <HStack justify="space-between" align="start" gap="6" flexWrap="wrap">
                <Box>
                  <Text fontSize="sm" color="whiteAlpha.600" textTransform="uppercase" letterSpacing="0.18em">
                    Current count
                  </Text>
                  <AnimatePresence mode="wait">
                    <MotionBox
                      key={count}
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Text
                        as="output"
                        aria-live="polite"
                        display="block"
                        mt="2"
                        fontSize={{ base: "64px", md: "104px" }}
                        lineHeight="0.88"
                        fontWeight="800"
                        letterSpacing="-0.08em"
                      >
                        {count}
                      </Text>
                    </MotionBox>
                  </AnimatePresence>
                </Box>

                <Box
                  maxW="280px"
                  p="4"
                  borderRadius="18px"
                  bg="rgba(0,0,0,0.20)"
                  border="1px solid rgba(255,255,255,0.08)"
                >
                  <Text color="whiteAlpha.800" fontSize="sm" lineHeight="1.6">
                    The button updates shared context state and triggers a custom toast using the updated
                    counter value.
                  </Text>
                </Box>
              </HStack>

              <HStack spacing="3" flexWrap="wrap">
                <MotionButton
                  as={Button}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  leftIcon={<AddIcon />}
                  onClick={handleIncrement}
                  aria-label="Increment counter by one"
                  size="lg"
                  minW="140px"
                  color="#06130C"
                  bg="#74C898"
                  _hover={{ bg: "#8CE0AE" }}
                  _active={{ bg: "#63B985" }}
                  boxShadow="0 0 0 1px rgba(116, 200, 152, 0.35), 0 16px 40px rgba(116, 200, 152, 0.18)"
                >
                  +1
                </MotionButton>

                <Button
                  leftIcon={<RepeatIcon />}
                  onClick={handleReset}
                  aria-label="Reset counter to zero"
                  size="lg"
                  variant="outline"
                  borderColor="whiteAlpha.300"
                  color="whiteAlpha.900"
                  _hover={{ bg: "whiteAlpha.100" }}
                  isDisabled={count === 0}
                >
                  Reset
                </Button>
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
}
