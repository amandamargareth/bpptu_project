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
    nama: true,
    alamat: true,
    city: true,
    phone: true,
    variety: true,
    quantity: true,
    to: true,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

    const { id } = useParams()

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [variety, setVariety] = useState("")
    const [quantity, setQuantity] = useState("")
    const [to, setTo] = useState("")
    const [status, setStatus] = useState("")
    const [validationError,setValidationError] = useState({})

    useEffect(()=>{
        fetchOrder()
    },[])
    
    const fetchOrder = async () => {
    await axios.get(`http://localhost:8000/api/orders/${id}`).then(({data})=>{
        const { name, address, city, phone, variety, quantity, to, status } = data.order
        setName(name)
        setAddress(address)
        setCity(city)
        setPhone(phone)
        setVariety(variety)
        setQuantity(quantity)
        setTo(to)
        setStatus(status)
    }).catch(({response:{data}})=>{
        Swal.fire({
        text:data.message,
        icon:"error"
        })
    })
    }

      const updateOrder = async (e) => {
        e.preventDefault();
    
        const formData = new FormData()
        formData.append('_method', 'PATCH');
        formData.append('name', name)
        formData.append('address', address)
        formData.append('city', city)
        formData.append('phone', phone)
        formData.append('variety', variety)
        formData.append('quantity', quantity)
        formData.append('to', to)
        formData.append('status', status)
    
        await axios.post(`http://localhost:8000/api/orders/${id}`, formData).then(({data})=>{
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
            FORM EDIT PEMBELIAN DOC/DOD BPPTU
          </Typography>
          <div className="px-5">
            {error && (<Alert severity="error" sx={{ width: '100%' }}>{error?.response?.data?.message || error?.response?.statusText || "Data Gagal disimpan" }</Alert>)}
          </div>
          <Box component="form" noValidate onSubmit={updateOrder} className="w-full text-center">
            <Grid container component="main">
            <Grid item xs={12} md={6} lg={6} className="px-5">
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nama"
              name="name"
              autoComplete="name"
              value={name}
              autoFocus
              error={!isValidForm.name}
              helperText={!isValidForm.name ? "Nama harus diisi!" : ""}
              onChange={(event)=>{
                setName(event.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              value={address}
              label="Alamat"
              id="address"
              autoComplete="current-address"
              error={!isValidForm.address}
              helperText={!isValidForm.address ? "Alamat harus diisi!" : ""}
              onChange={(event)=>{
                setAddress(event.target.value)
              }}/>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <FormControl fullWidth margin="normal" required error={!isValidForm.city} className="text-left">
              <InputLabel id="city">Kota / Kabupaten</InputLabel>
              <Select
                labelId="city"
                id="city"
                value={city}
                onChange={(event)=>{
                    setCity(event.target.value)
                  }}
                label="Kota"
              >
                  <MenuItem value="BOGOR">BOGOR </MenuItem>
                  <MenuItem value="SUKABUMI">SUKABUMI </MenuItem>
                  <MenuItem value="CIANJUR">CIANJUR </MenuItem>
                  <MenuItem value="BANDUNG">BANDUNG </MenuItem>
                  <MenuItem value="GARUT">GARUT </MenuItem>
                  <MenuItem value="TASIKMALAYA">TASIKMALAYA </MenuItem>
                  <MenuItem value="CIAMIS">CIAMIS </MenuItem>
                  <MenuItem value="PANGANDARAN">PANGANDARAN </MenuItem>
                  <MenuItem value="KUNINGAN">KUNINGAN </MenuItem>
                  <MenuItem value="CIREBON">CIREBON </MenuItem>
                  <MenuItem value="MAJALENGKA">MAJALENGKA </MenuItem>
                  <MenuItem value="SUMEDANG">SUMEDANG </MenuItem>
                  <MenuItem value="INDRAMAYU">INDRAMAYU </MenuItem>
                  <MenuItem value="SUBANG">SUBANG </MenuItem>
                  <MenuItem value="PURWAKARTA">PURWAKARTA </MenuItem>
                  <MenuItem value="KARAWANG">KARAWANG </MenuItem>
                  <MenuItem value="BEKASI">BEKASI </MenuItem>
                  <MenuItem value="BANDUNG BARAT">BANDUNG BARAT </MenuItem>
                  <MenuItem value="KOTA BOGOR">KOTA BOGOR </MenuItem>
                  <MenuItem value="KOTA SUKABUMI">KOTA SUKABUMI </MenuItem>
                  <MenuItem value="KOTA BANDUNG">KOTA BANDUNG </MenuItem>
                  <MenuItem value="KOTA CIREBON">KOTA CIREBON </MenuItem>
                  <MenuItem value="KOTA BEKASI">KOTA BEKASI </MenuItem>
                  <MenuItem value="KOTA DEPOK">KOTA DEPOK </MenuItem>
                  <MenuItem value="KOTA CIMAHI">KOTA CIMAHI </MenuItem>
                  <MenuItem value="KOTA TASIKMALAYA">KOTA TASIKMALAYA </MenuItem>
                  <MenuItem value="KOTA BANJAR">KOTA BANJAR </MenuItem>
              </Select>
              <FormHelperText>{!isValidForm.city ? "Kota harus dipilih!" : ""}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <TextField
              margin="normal"
              required
              fullWidth
              name="phone"
              label="Nomor HP"
              id="phone"
              value={phone}
              autoComplete="current-phone"
              error={!isValidForm.phone}
              helperText={!isValidForm.phone ? "Nomor HP harus diisi!" : ""}
              onChange={(event)=>{
                setPhone(event.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <FormControl fullWidth margin="normal" required error={!isValidForm.variety} className="text-left">
              <InputLabel id="variety">Jenis Pembelian</InputLabel>
              <Select
                labelId="variety"
                id="jenisPembelianSelect"
                value={variety}
                onChange={(event)=>{
                    setVariety(event.target.value)
                  }}
                label="variety"
              >
                
                <MenuItem value="DOC Ayam Sentul">DOC Ayam Sentul </MenuItem>
                  <MenuItem value="DOD Itik Rambon">DOD Itik Rambon </MenuItem>
              </Select>
              <FormHelperText>{!isValidForm.variety ? "Jenis Pembelian harus dipilih!" : ""}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <TextField
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Jumlah Pembelian"
              id="quantity"
              value={quantity}
              autoComplete="current-quantity"
              error={!isValidForm.quantity}
              helperText={!isValidForm.quantity ? "Jumlah Pembelian harus diisi!" : ""}
              onChange={(event)=>{
                setQuantity(event.target.value)
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <FormControl fullWidth margin="normal" required error={!isValidForm.to} className="text-left">
              <InputLabel id="to">Tujuan Pembelian</InputLabel>
              <Select
                labelId="to"
                id="tujuanPembelianSelect"
                value={to}
                onChange={(event)=>{
                    setTo(event.target.value)
                  }}
                label="to"
              >
                
                <MenuItem value="Bibit">Bibit </MenuItem>
                  <MenuItem value="Potong">Potong </MenuItem>
              </Select>
              <FormHelperText>{!isValidForm.to ? "Tujuan Pembelian harus dipilih!" : ""}</FormHelperText>
            </FormControl>
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