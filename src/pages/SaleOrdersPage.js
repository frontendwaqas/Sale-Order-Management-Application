import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Spinner,
} from "@chakra-ui/react";
import { useSaleOrders } from "../hooks/useSaleOrders";
import SaleOrderList from "../components/SaleOrderList";

const SaleOrdersPage = () => {
  const { activeOrders, completedOrders, isLoadingActive, isLoadingCompleted } =
    useSaleOrders();

  return (
    <Tabs>
      <TabList>
        <Tab>Active Sale Orders</Tab>
        <Tab>Completed Sale Orders</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {isLoadingActive ? (
            <Spinner />
          ) : (
            <SaleOrderList orders={activeOrders} title="Active Sale Orders" />
          )}
        </TabPanel>
        <TabPanel>
          {isLoadingCompleted ? (
            <Spinner />
          ) : (
            <SaleOrderList
              orders={completedOrders}
              title="Completed Sale Orders"
              readOnly
            />
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SaleOrdersPage;
