import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import MUIDataTable from "mui-datatables";
import moment from "moment/moment";

function Stocks() {
  const [stocks, setStocks] = useState({});


    useEffect(()=>{
        fetchStocks() 
    },[])

    const fetchStocks = async () => {
        await axios.get(`http://localhost:8000/api/stocks`).then(({data})=>{
            setStocks(data)
        })
    }
    
    
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
      <section className="stock" id="stock">
      
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
          <Grid
            item
            xs={12}
            md={4}
           
          >
        <Box
        component={Paper}
        sx={{
          py: 8,
          px: 4,
          mt: 8,
          mr: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <h1>
                    <span>Persediaan</span>
                  </h1>
                  <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                <div>  {
                                    stocks.length > 0 && (
                                        stocks.map((row, index)=>(
                                            <tr key={index}>
                                              <li>{row.stock_name} :   <b>{row.stock_quantity}</b> ekor
                                              </li>
                                              
                                                
                                                
                                            </tr>
                                        ))
                                    )
                                }</div>
                </div>
              </div>
            </div>
        </Box>
      </Grid>
          </Grid>
          
          
        
      </section>
      </>
      
    );
  }
export default Stocks;

