import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const fetchSaleOrders = async (status) => {
  // Mimic API call
  return [
    {
      id: 1,
      customerName: "John Doe",
      amount: 100,
      status: "active",
      date: "2024-05-27",
    },
    // more sale orders
  ];
};

const createSaleOrder = async (newOrder) => {
  // Mimic API call
  console.log("Creating order:", newOrder);
  return { ...newOrder, id: Math.random() }; // Return a new order with a random ID
};

export const useSaleOrders = () => {
  const queryClient = useQueryClient();

  const {
    data: activeOrders,
    refetch: refetchActiveOrders,
    isLoading: isLoadingActive,
  } = useQuery({
    queryKey: ["saleOrders", "active"],
    queryFn: () => fetchSaleOrders("active"),
  });

  const {
    data: completedOrders,
    refetch: refetchCompletedOrders,
    isLoading: isLoadingCompleted,
  } = useQuery({
    queryKey: ["saleOrders", "completed"],
    queryFn: () => fetchSaleOrders("completed"),
  });

  const mutation = useMutation({
    mutationFn: createSaleOrder,
    onSuccess: () => {
      queryClient.invalidateQueries(["saleOrders", "active"]);
    },
  });

  return {
    activeOrders,
    completedOrders,
    isLoadingActive,
    isLoadingCompleted,
    refetchActiveOrders,
    refetchCompletedOrders,
    createSaleOrder: mutation.mutate,
  };
};
