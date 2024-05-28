import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Button,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import SaleOrderForm from "./SaleOrderForm";

const SaleOrderList = ({ orders, title, readOnly }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEdit = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  if (!orders) {
    return (
      <Box>
        <Spinner />
        <Text>Loading {title}...</Text>
      </Box>
    );
  }

  if (orders.length === 0) {
    return (
      <Box>
        <Text>No {title} available</Text>
        {!readOnly && (
          <Button colorScheme="teal" onClick={() => setIsModalOpen(true)}>
            + Sale Order
          </Button>
        )}
      </Box>
    );
  }

  return (
    <Box>
      {!readOnly && (
        <Button colorScheme="teal" onClick={() => setIsModalOpen(true)}>
          + Sale Order
        </Button>
      )}
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>Customer Name</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>{order.customerName}</Td>
              <Td>{order.amount}</Td>
              <Td>{order.status}</Td>
              <Td>{order.date}</Td>
              <Td>
                <IconButton
                  icon={<EditIcon />}
                  onClick={() => handleEdit(order)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <SaleOrderForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={selectedOrder}
        readOnly={readOnly}
      />
    </Box>
  );
};

export default SaleOrderList;
