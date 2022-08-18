import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#FAF884",
    200: "#5FFB17",
    300: "#5FFB17",
    400: "#5FFB17",
    500: "#00FFFF",
    600: "#F778A1",
    700: "#BDEDFF",
    800: "#075C37",
    900: "#064C2E"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;
