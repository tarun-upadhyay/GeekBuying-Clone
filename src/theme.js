import {
  extendTheme,
  theme as base,
  withDefaultVariant,
} from "@chakra-ui/react";
export const theme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts.heading}`,
    body: "Inter",
  },
  components: {
    Input: {
      variants: {
        filled: {
          field: {
            _focus: {
              borderColor: "green",
            },
          },
        },
      },
      sizes: {
        md: {
          field: {
            borderRadius: "10%",
            borderColor: 'black'
          },
        },
      },
    },
  },
});
withDefaultVariant({
  variant: "outline",
  components: ["Input"],
});
