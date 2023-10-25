import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Alert, Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';


import CircularProgress from "@mui/material/CircularProgress";


export default function EditUser() {
  const [isValidForm, setIsValidForm] = useState({
    stock_name: true,
    stock_quantity: true,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { id } = useParams()

    const [stock_name, setStock_Name] = useState("")
    const [stock_quantity, setStock_Quantity] = useState("")
    const [validationError,setValidationError] = useState({})

    useEffect(()=>{
        fetchStocks()
    },[])
    
    const fetchStocks = async () => {
    await axios.get(`http://localhost:8000/api/stocks/${id}`).then(({data})=>{
        const { stock_name, stock_quantity } = data.stock
        setStock_Name(stock_name)
        setStock_Quantity(stock_quantity)
    }).catch(({response:{data}})=>{
        Swal.fire({
        text:data.message,
        icon:"error"
        })
    })
    }

      const updateStock = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('_method', 'PATCH');
        formData.append('stock_name', stock_name)
        formData.append('stock_quantity', stock_quantity)
        
    
        await axios.post(`http://localhost:8000/api/stocks/${id}`, formData).then(({data})=>{
          Swal.fire({
            icon:"success",
            text:data.message
          })
          navigate("/adminpage")
        }).catch(({response})=>{
          if(response.status===422){
            setValidationError(response.data.errors)
          }else{
            Swal.fire({
              text:response.data.message,
              icon:"error"
            })
          }
        })
      }
      
      return(
        <>
      <Container component="main" maxWidth="md" sx={{ mb: 12 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 9 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h2" variant="h6" className="w-full text-center my-8">
            FORM EDIT STOCK DOC/DOD BPPTU
          </Typography>
          <div className="px-5">
            {error && (<Alert severity="error" sx={{ width: '100%' }}>{error?.response?.data?.message || error?.response?.statusText || "Data Gagal disimpan" }</Alert>)}
          </div>
          <Box component="form" noValidate onSubmit={updateStock} className="w-full text-center">
            <Grid container component="main">
            <Grid item xs={12} className="px-5 py-3">
            <h3 style={{ textAlign: 'left' }}>{stock_name}</h3>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="stock_name"
              label="Nama Stok"
              name="stock_name"
              autoComplete="stock_name"
              value={stock_name}
              autoFocus
              error={!isValidForm.stock_name}
              helperText={!isValidForm.stock_name ? "Nama harus diisi!" : ""}
              onChange={(event)=>{
                setStock_Name(event.target.value)
              }}
            /> */}
          </Grid>
          <Grid item xs={12} className="px-5">
            <TextField
              margin="normal"
              required
              fullWidth
             name="stock_quantity"
              value={stock_quantity}
              label="Jumlah"
              id="stock_quantity"
              autoComplete="current-stock_quantity"
              error={!isValidForm.stock_quantity}
              helperText={!isValidForm.stock_quantity ? "Alamat harus diisi!" : ""}
              onChange={(event)=>{
                setStock_Quantity(event.target.value)
              }}/>
          </Grid>
              <Grid container component="main">
                <Grid item xs={12} md={4} lg={4} className="px-5" />
                <Grid item xs={12} md={4} lg={4} className="px-5">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="success"
                    size="large"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isLoading}
                  >
                    {isLoading ? <CircularProgress /> : "SIMPAN"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  )
};