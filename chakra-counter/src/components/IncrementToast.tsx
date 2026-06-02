"use client";

import { Box, HStack, Text } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

type IncrementToastProps = {
  count: number;
};

const MotionBox = motion(Box);

export function IncrementToast({ count }: IncrementToastProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      role="status"
      aria-live="polite"
    >
      <HStack
        minW={{ base: "300px", sm: "360px" }}
        align="center"
        padding="12px 20px 12px 16px"
        gap="12px"
        borderRadius="8px"
        border="1px solid rgba(111, 112, 118, 0.95)"
        background="radial-gradient(53.57% 282.15% at 2.14% 50%, rgba(116, 200, 152, 0.15) 0%, rgba(116, 200, 152, 0.03) 100%), #46474F"
        boxShadow="0px 0px 0px 1px rgba(40, 41, 50, 0.04), 0px 2px 2px -1px rgba(40, 41, 50, 0.04), 0px 4px 4px -2px rgba(40, 41, 50, 0.04), 0px 8px 8px -4px rgba(40, 41, 50, 0.06), 0px 16px 32px rgba(40, 41, 50, 0.06)"
      >
        <Box
          display="grid"
          placeItems="center"
          flexShrink={0}
          width="32px"
          height="32px"
          border="2px solid #74C898"
          borderRadius="999px"
          color="#74C898"
        >
          <CheckIcon boxSize="14px" />
        </Box>

        <Box>
          <Text fontSize="14px" lineHeight="16px" fontWeight="600" color="#FFFFFF">
            Incremented
          </Text>
          <Text mt="4px" fontSize="14px" lineHeight="18px" color="rgba(255,255,255,0.86)">
            Counter is now {count}
          </Text>
        </Box>
      </HStack>
    </MotionBox>
  );
}
