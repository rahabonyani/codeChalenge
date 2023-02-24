import type { FormErrorMessageProps, FormLabelProps, InputProps, TextareaProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type CustomInputProps = {
  inputProps?: InputProps;
  textareaProps?: TextareaProps;
  formLabelProps?: FormLabelProps;
  formErrorMessageProps?: FormErrorMessageProps;
  showMessage?: boolean;
  message?: ReactNode;
  label?: ReactNode;
  id?: string;
  isInvalid?: boolean;
  type?:
    | "button"
    | "checkbox"
    | "password"
    | "text"
    | "number"
    | "color"
    | "date"
    | "dateTime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "time"
    | "url"
    | "week"
    | "textarea";
};
