import React from "react";
import axios from "axios";
import { useState } from "react";

import { Container, Alert, Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';

import { JENIS_PEMBELIAN, KABUPATEN, TUJUAN_PEMBELIAN } from "./index";
import CircularProgress from "@mui/material/CircularProgress";


const FormInput = () => {
  const [form, setForm] = useState({});
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (form.name && form.address && form.city && form.phone && form.variety && form.quantity && form.to) {
        await axios.post(`http://localhost:8000/api/orders`, form);
        setIsLoading(false);
        setError(null);
        setForm({}); // Mengosongkan formulir setelah berhasil menyimpan
      } else {
        throw new Error("Data tidak lengkap atau tidak valid.");
      }
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleChangeForm = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
    if (value && value !== '') {
      setIsValidForm({
        ...isValidForm,
        [key]: true,
      });
    } else {
      setIsValidForm({
        ...isValidForm,
        [key]: false,
      });
    }
  }

  const validateInputNumberOnly = (key, value) => {
    const re = /^[0-9\b]+$/;
    if (value === '' || re.test(value)) {
      setForm({
        ...form,
        [key]: value,
      });

      if (value && value !== '') {
        setIsValidForm({
          ...isValidForm,
          [key]: true,
        });
      } else {
        setIsValidForm({
          ...isValidForm,
          [key]: false,
        });
      }
    }
  };

  return (
    <>
      <Container component="main" maxWidth="md" sx={{ mb: 12 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 9 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h2" variant="h6" className="w-full text-center my-8">
            FORM PEMBELIAN DOC/DOD BPPTU
          </Typography>
          <div className="px-5">
            {error && (<Alert severity="error" sx={{ width: '100%' }}>{error?.response?.data?.message || error?.response?.statusText || "Data Gagal disimpan" }</Alert>)}
          </div>
          <Box component="form" noValidate onSubmit={handleSubmit} className="w-full text-center">
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
              autoFocus
              error={!isValidForm.name}
              helperText={!isValidForm.name ? "Nama harus diisi!" : ""}
              onChange={(e) => handleChangeForm('name', e?.target?.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <TextField
              margin="normal"
              required
              fullWidth
              name="address"
              label="Alamat"
              id="address"
              autoComplete="current-address"
              error={!isValidForm.address}
              helperText={!isValidForm.address ? "Alamat harus diisi!" : ""}
              onChange={(e) => handleChangeForm('address', e?.target?.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <FormControl fullWidth margin="normal" required error={!isValidForm.city} className="text-left">
              <InputLabel id="city">Kota / Kabupaten</InputLabel>
              <Select
                labelId="city"
                id="kotaSelect"
                value={form.city || ''}
                onChange={(e) => handleChangeForm('city', e?.target?.value)}
                label="Kota"
              >
                {KABUPATEN.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item}
                  >
                    {item.nama}
                  </MenuItem>
                ))}
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
              autoComplete="current-phone"
              error={!isValidForm.phone}
              helperText={!isValidForm.phone ? "Nomor HP harus diisi!" : ""}
              onChange={(e) => validateInputNumberOnly('phone', e?.target?.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <FormControl fullWidth margin="normal" required error={!isValidForm.variety} className="text-left">
              <InputLabel id="variety">Jenis Pembelian</InputLabel>
              <Select
                labelId="variety"
                id="jenisPembelianSelect"
                value={form.variety || ''}
                onChange={(e) => handleChangeForm('variety', e?.target?.value)}
                label="variety"
              >
                {JENIS_PEMBELIAN.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item}
                  >
                    {item.nama}
                  </MenuItem>
                ))}
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
              autoComplete="current-quantity"
              error={!isValidForm.quantity}
              helperText={!isValidForm.quantity ? "Jumlah Pembelian harus diisi!" : ""}
              onChange={(e) => validateInputNumberOnly('quantity', e?.target?.value)}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className="px-5">
            <FormControl fullWidth margin="normal" required error={!isValidForm.to} className="text-left">
              <InputLabel id="to">Tujuan Pembelian</InputLabel>
              <Select
                labelId="to"
                id="tujuanPembelianSelect"
                value={form.to || ''}
                onChange={(e) => handleChangeForm('to', e?.target?.value)}
                label="to"
              >
                {TUJUAN_PEMBELIAN.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item}
                  >
                    {item.nama}
                  </MenuItem>
                ))}
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
}

export default FormInput;