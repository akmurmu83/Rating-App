import { FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

function AddDay() {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
}

export default AddDay;
