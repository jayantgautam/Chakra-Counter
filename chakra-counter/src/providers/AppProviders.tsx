"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CounterProvider } from "@/context/CounterContext";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "var(--font-inter), system-ui, sans-serif",
    body: "var(--font-inter), system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#090A0F",
        color: "white",
      },
      "*:focus-visible": {
        outline: "2px solid #74C898",
        outlineOffset: "3px",
      },
    },
  },
});

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ChakraProvider theme={theme}>
      <CounterProvider>{children}</CounterProvider>
    </ChakraProvider>
  );
}
