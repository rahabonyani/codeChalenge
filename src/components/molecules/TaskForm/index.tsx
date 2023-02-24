import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { addTaskAction } from "actions/taskAction";
import Input from "components/atoms/Input";
import { useFormik } from "formik";
import { useActions } from "hooks/useActions";
import uuid from "react-uuid";
import * as yup from "yup";
import type { ProductFormProps } from "./types";

const TaskForm = ({ title = "", description = "", onCloseDrawer }: ProductFormProps) => {
  const [addNewTask] = useActions([addTaskAction]);

  const validationSchema = yup.object({
    title: yup.string().required("Please Enter Title"),
    description: yup.string().required("Please Enter description"),
  });

  const formik = useFormik({
    initialValues: {
      title: title,
      description: description,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = { ...values, completed: false, id: uuid() };
      addNewTask(data);
      onCloseDrawer();
    },
  });

  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <Grid templateColumns="repeat(12, 1fr)" rowGap={10} columnGap={4} p={10}>
        <GridItem colSpan={12}>
          <Input
            isInvalid={formik.touched.title && Boolean(formik.errors.title)}
            inputProps={{
              name: "title",
              value: formik.values.title,
              onChange: formik.handleChange,
            }}
            type="text"
            label="Title"
            showMessage={formik.touched.title && Boolean(formik.errors.title)}
            message={formik.errors.title}
          />
        </GridItem>

        <GridItem colSpan={12}>
          <Input
            isInvalid={formik.touched.description && Boolean(formik.errors.description)}
            inputProps={{
              name: "description",
              value: formik.values.description,
              onChange: formik.handleChange,
            }}
            type="text"
            label="Description"
            showMessage={formik.touched.description && Boolean(formik.errors.description)}
            message={formik.errors.description}
          />
        </GridItem>
        <GridItem colSpan={12}>
          <Flex justifyContent="end" pt={10} width="full">
            <Button variant="outline" px={10} py={4} onClick={onCloseDrawer} me={6}>
              Cancel
            </Button>
            <Button bg="green.500" colorScheme="green" color="white" px={10} py={4} type="submit">
              Save
            </Button>
          </Flex>
        </GridItem>
      </Grid>
    </form>
  );
};

export default TaskForm;
