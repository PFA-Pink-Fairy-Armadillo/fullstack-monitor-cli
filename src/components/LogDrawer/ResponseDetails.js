import React from 'react';
import {
  Stack,
  DrawerBody,
  Box,
  FormLabel,
  Text,
} from "@chakra-ui/react";

export default function ResponseDetails({ activeLog }) {
  return (
    <DrawerBody>
      <Stack spacing="24px">
        <Box display="flex">
          <FormLabel>Timestamp:</FormLabel>
          <Text>{activeLog.timestamp}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>Type:</FormLabel>
          <Text>{activeLog.class}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>Status:</FormLabel>
          <Text>{activeLog.responseStatus}</Text>
        </Box>
        <Box display="flex">
          <FormLabel>Endpoint:</FormLabel>
          <Text>{activeLog.responseData ? activeLog.responseData : 'no data'}</Text>
        </Box>
      </Stack>
    </DrawerBody>
  );
}