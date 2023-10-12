import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
// import moment from "moment";
import PaymentIcon from "@mui/icons-material/Payment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import moment from "moment";

import { PaymentInterface } from "../interfaces/IPayment";


function Payment_Show() {
  const [payment, setPayment] = React.useState<PaymentInterface[]>([]);

  // โหลดข้อมูลทั้งหมดใส่ datagrid
  const getPayment = async () => {
    const apiUrl = "http://localhost:8080/Payments";
    const requestOptions = {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };
    await fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setPayment(res.data);
        } else {
          console.log("Table Payment Show Error");
        }
      });
  };
  useEffect(() => {
    getPayment();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "ID",
      headerName: "ID",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Basket_id",
      headerName: "ตะกร้าสิ้นค้า",
      width: 200,
      headerAlign: "center",
      align: "center",
      headerClassName: "green1",
      // valueFormatter: (params) => params.value.id,
    },
    {
      field: "Basket",
      headerName: "ยอดรวม",
      width: 200,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => params.value.Total,
    },
    {
      field: "Date",
      headerName: "วันที่ชำระสินค้า",
      width: 300,
      headerAlign: "center",
      align: "center",
      renderCell: (params) =>
        moment(params.row.Date).format("YY-MM-DD HH:mm:ss"),
    },
    {
      field: "Status",
      headerName: "สถานะ",
      width: 250,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => params.value.Status,
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-base-200 h-screen p-14">
        <Container maxWidth="lg">
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography
                className="text-center"
                variant="h3"
                color="rgb(57, 78, 106)"
                gutterBottom
              >
                History Payments
              </Typography>
            </Box>
            <Box sx={{ paddingX: 1, paddingY: 0 }}>
              <Button
                component={RouterLink}
                to="/Cart"
                variant="contained"
                color="primary"
                startIcon={<ArrowBackIcon />}
              >
                กลับ
              </Button>
            </Box>
          </Box>
          <div style={{ height: 400, width: "100%", marginTop: "20px" }}>
            <DataGrid
              rows={payment}
              getRowId={(row) => row.ID}
              columns={columns}
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Payment_Show;
