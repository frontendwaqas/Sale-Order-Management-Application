import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useSaleOrders } from "../hooks/useSaleOrders";

const SaleOrderForm = ({ isOpen, onClose, initialData, readOnly }) => {
  const { register, handleSubmit, reset, control } = useForm({
    defaultValues: initialData || {
      customer_id: "",
      items: [{ sku_id: "", price: "", quantity: "" }],
      paid: false,
      invoice_no: "",
      invoice_date: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const { createSaleOrder } = useSaleOrders();

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
    createSaleOrder(data, {
      onSuccess: () => {
        console.log("Order created successfully");
        reset(); // Reset the form after successful submission
        onClose(); // Close the modal
      },
      onError: (error) => {
        console.error("Error creating order:", error);
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {readOnly ? "View Sale Order" : "Create Sale Order"}
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <VStack spacing={4}>
              <FormControl id="customer_id">
                <FormLabel>Customer ID</FormLabel>
                <Input
                  type="text"
                  {...register("customer_id", { required: true })}
                  readOnly={readOnly}
                />
              </FormControl>
              {fields.map((item, index) => (
                <VStack key={item.id} spacing={4}>
                  <FormControl id={`items[${index}].sku_id`}>
                    <FormLabel>SKU ID</FormLabel>
                    <Input
                      type="text"
                      {...register(`items[${index}].sku_id`, {
                        required: true,
                      })}
                      readOnly={readOnly}
                    />
                  </FormControl>
                  <FormControl id={`items[${index}].price`}>
                    <FormLabel>Price</FormLabel>
                    <Input
                      type="number"
                      {...register(`items[${index}].price`, { required: true })}
                      readOnly={readOnly}
                    />
                  </FormControl>
                  <FormControl id={`items[${index}].quantity`}>
                    <FormLabel>Quantity</FormLabel>
                    <Input
                      type="number"
                      {...register(`items[${index}].quantity`, {
                        required: true,
                      })}
                      readOnly={readOnly}
                    />
                  </FormControl>
                  {!readOnly && (
                    <Button
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => remove(index)}
                    >
                      Remove Item
                    </Button>
                  )}
                </VStack>
              ))}
              {!readOnly && (
                <Button
                  colorScheme="teal"
                  onClick={() =>
                    append({ sku_id: "", price: "", quantity: "" })
                  }
                >
                  Add Item
                </Button>
              )}
              <FormControl id="paid">
                <FormLabel>Paid</FormLabel>
                <Select
                  {...register("paid", { required: true })}
                  readOnly={readOnly}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </Select>
              </FormControl>
              <FormControl id="invoice_no">
                <FormLabel>Invoice Number</FormLabel>
                <Input
                  type="text"
                  {...register("invoice_no", { required: true })}
                  readOnly={readOnly}
                />
              </FormControl>
              <FormControl id="invoice_date">
                <FormLabel>Invoice Date</FormLabel>
                <Input
                  type="date"
                  {...register("invoice_date", { required: true })}
                  readOnly={readOnly}
                />
              </FormControl>
            </VStack>
          </ModalBody>
          {!readOnly && (
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          )}
        </form>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderForm;
