import React, { useState, useEffect } from "react";
import { Box, Tab, Grid } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
// import AdminCategory from "./AdminCategory";
// import AdminSubCategory from "./AdminSubCategory";
// import AdminProduct from "./AdminProduct";
import NewNavbar from "./NewNavbar";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminDashboardTab from "./AdminDashboardTab";
import Add from "./Add";
import AddButton from "./AddButton";
// import AdminDashboardDetails from "./AdminDashboardDetails";
function AdminDashboard({orders,products}) {
  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container>
        <TabContext value={value}>
          {/* <Grid item lg={3}> */}    
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={2}
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="admin_left_side"
          >
            <TabList aria-label="Tabs example" onChange={handleChange}>
              <Tab label="Dashboard" value="0"></Tab>
            </TabList>
            <TabList aria-label="Tabs example" onChange={handleChange}>
              <Tab label="Products" value="1"></Tab>
            </TabList>
            <TabList aria-label="Tabs example" onChange={handleChange}>
              <Tab label="Orders" value="2"></Tab>
            </TabList>
            {/* <TabList aria-label="Tabs example" onChange={handleChange}>
              <Tab label="Add Products" value="3"></Tab>
            </TabList> */}
          </Grid>
          {/* </Grid> */}
          <Grid item xs={12} sm={12} md={12} lg={10}>
            <TabPanel value="0">
                <AdminDashboardTab/>
            </TabPanel>
            <TabPanel value="1">
                <AdminProducts products={products}/>
            </TabPanel>
            <TabPanel value="2">
              <AdminOrders orders={orders}/>
            </TabPanel>
            {/* <TabPanel value="3">
              <AddButton/>
            </TabPanel> */}
          </Grid>
        </TabContext>
      </Grid>
    </>
  );
}

export default AdminDashboard;
