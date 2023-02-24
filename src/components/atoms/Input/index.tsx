import { FormControl, FormLabel, FormErrorMessage, Input as InputChakra, Textarea } from "@chakra-ui/react";
import { CustomInputProps } from "./types";

const Input = ({
  inputProps,
  textareaProps,
  showMessage,
  message,
  isInvalid,
  formLabelProps,
  formErrorMessageProps,
  id,
  label,
  type = "text",
}: CustomInputProps) => {
  return (
    <FormControl isInvalid={isInvalid} height="full">
      {label && (
        <FormLabel {...formLabelProps} htmlFor={id}>
          {label}
        </FormLabel>
      )}
      {type === "textarea" ? <Textarea {...textareaProps} /> : <InputChakra type={type} {...inputProps} id={id} />}

      {showMessage && (
        <FormErrorMessage color="red.500" {...formErrorMessageProps}>
          {message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default Input;
