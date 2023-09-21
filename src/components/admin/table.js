import React from "react";
import axios from "axios";
import { Box, Button, Grid, Paper } from "@mui/material";
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import moment from "moment/moment";




function Tabel(){
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


    const fetchOrders = async () => {
        axios.get(`http://localhost:8000/api/actions`
        ).then(res => {
            setOrders(res?.data);
            setIsLoading(false);
        }).catch(error => {
            if (error.response) {
                setErrorMessage(error.response.data?.message || "Terjadi Kesalahan");
            } else {
                setErrorMessage(error.response|| "Terjadi Kesalahan");
            }
            setIsError(true);
            setIsLoading(false);
        });
    }

    useEffect(()=>{
        fetchOrders(); 
    },[])

    const columns = [
        { name: 'id', label: 'NO', options: { customBodyRender: (value, meta) => meta.rowIndex + 1}},
        { name: 'created_at', label: 'TANGGAL', options: { setCellProps: () => ({ style: { whiteSpace: "nowrap"} }), customBodyRender: (value, meta) => moment(value).format("DD-MMM-YYYY HH:mm")}},
        { name: 'name', label: 'NAMA PEMBELI', options: { setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'variety', label: 'JENIS PEMBELIAN', options: { setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'quantity', label: 'TOTAL EKOR', options: { setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'to', label: 'TUJUAN PEMBELIAN', options: { setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
      ];

      return (
        <>
        <Box height={100} />
         <Grid container component="main">
          <Grid
            item
            xs={12}
            md={8}
           
          >

            <Box
                sx={{
                  height: "100%",
                  paddingY: 3,
                  margin: 5,
                 
                }}
              >
              <MUIDataTable
                title={"WAITING LIST"}
                data={orders}
                columns={columns}
                style={{ backgroundColor: "green"}}
                options={{
                    tableId:"actions",
                  selectableRows: 'none',
                  download: false,
                  print: false,
                  viewColumns: false,

                }}
              />
            </Box>
          </Grid>
          </Grid>
        </>
      )
}

export default Tabel;