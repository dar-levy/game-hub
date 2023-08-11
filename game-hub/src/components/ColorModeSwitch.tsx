import { HStack, Switch, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
