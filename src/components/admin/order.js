import React from "react";
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { useState, useEffect } from "react";
import moment from "moment/moment";
import { Box, Button, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { Check, Delete, Edit, Send, Warning } from "@mui/icons-material";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom'
// import useMediaQuery from "./map/useMediaQuery";

// const loadingMaps = () =>
//   {
//     return <Box
//               my={2}
//               sx={{
//                 justifyContent: "center",
//                 textAlign: "center",
//                 width: "100%",
//               }}
//             >
//               <CircularProgress color="success" />
//             </Box>;
//   };

// let DistributionMaps = loadingMaps;



function Order(){

  const token = localStorage.getItem("token");

 




  const navigate = useNavigate();  
  const { id } = useParams()
  const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetchOrders() 
    },[])

    const fetchOrders = async () => {
        await axios.get(`http://localhost:8000/api/orders`).then(({data})=>{
            setOrders(data)
        })
    }

    
    
      
        // const updateStatus = async (e) => {
        //   e.preventDefault();
      
        //   const formData = new FormData()
        //   formData.append('_method', 'PUT');
        //   formData.append('status', status)
      
        //   await axios.post(`http://localhost:8000/api/orders/${id}`, formData).then(({data})=>{
        //     Swal.fire({
        //       icon:"success",
        //       text:data.message
        //     })
        //     navigate("/adminpage")
        //   }).catch(({response})=>{
        //     if(response.status===422){
        //       setValidationError(response.data.errors)
        //     }else{
        //       Swal.fire({
        //         text:response.data.message,
        //         icon:"error"
        //       })
        //     }
        //   })
        // }

  const deleteOrder = async (id) => {
    const isConfirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }

      await axios.delete(`http://localhost:8000/api/orders/${id}`).then(({data})=>{
        Swal.fire({
            icon:"success",
            text:data.message
        })
        fetchOrders()
      }).catch(({response:{data}})=>{
        Swal.fire({
            text:data.message,
            icon:"error"
        })
      })
}





// const handleUpdateStatus = () => {
//   setIsLoading(true);
//   axios.patch(
//     `http://localhost:8000/api/updates`
//     ).then(res => {
//       setIsLoading(false);
//       setSuccessMessage('Data berhasil diubah status!');
//       setIsSuccess(true);
//     }).catch(error => {
//       if (error.response) {
//         setErrorMessage(error.response.data?.message || "Terjadi Kesalahan");
//       } else {
//         setErrorMessage(error.message || "Terjadi Kesalahan");
//       }
//       setIsLoading(false);
//       setInvalidUpdateStatus(true);
//   });
//   setDataToUpdateStatus({});
//   setIsUpdateStatus(false);
// };


    const columns = [
        { name: 'no', label: 'NO', options: {filter: true, sort: false, customBodyRender: (value, meta) => meta.rowIndex + 1}},
        { name: 'createdAt', label: 'TANGGAL', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} }), customBodyRender: (value, meta) => moment(value).format("DD-MMM-YYYY HH:mm")}},
        { name: 'name', label: 'NAMA PEMBELI', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'address', label: 'ALAMAT', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'city', label: 'KABUPATEN/KOTA', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'phone', label: 'NO HP', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'variety', label: 'JENIS PEMBELIAN', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'quantity', label: 'TOTAL EKOR', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'to', label: 'TUJUAN PEMBELIAN', options: {filter: true, sort: false, setCellProps: () => ({ style: { whiteSpace: "nowrap"} })}},
        { name: 'status', label: 'STATUS', options: {
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta) => {
            return (
              <>
              {(() => {

if (value === "Selesai") {

  return (

    <Button type="done" variant="contained" size="small" color="success" startIcon={<Check />} style={{cursor:'not-allowed'}}>
    Selesai
  </Button>

  )

}  else {

  return (

    <Button type="process" variant="contained" size="small" color="primary" endIcon={<Send />} onClick={deleteOrder} >
    Proses
  </Button>

  )

}

})()}
              {/* {value
                ? (<Button type="done" variant="contained" size="small" color="success" startIcon={<Check />} style={{cursor:'not-allowed'}}>
                  Selesai
                </Button>)
                  : (<Button type="process" variant="contained" size="small" color="primary" endIcon={<Send />}  >
                  Proses
                </Button>)
              } */}
              </>
          )}
        }},
        { name: 'id', label: 'ACTION', options: {
          filter: false,
          sort: false,
          customBodyRender: (value, tableMeta) => {
            return (
              <>
                <Link to={`/order/edit/${value}`}>
                <Edit />
                 </Link>
                {/* <Link
                to={`/order/edit/${value}`}
                sx={{ color: 'orange', cursor: 'pointer' }}
                /> */}
                <Delete 
                  sx={{ color: 'red', cursor: 'pointer' }} 
                  onClick={()=>deleteOrder(value)}
                />
              </>
          )}
        }},
      ];

      return (
        <>
              {/* <section className="">
                    <div className="flex flex-wrap sm:align-middle">
                      <div
                        className={`flex flex-col xl:w-full lg:w-full md:w-full sm:w-full w-full ${
                          isMobile && "items-center"
                        }`}
                      >
                        <Box
                          my={2}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Typography fontWeight="bold">Distribusi unggas ke setiap kota dan kabupaten di Jawa Barat</Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            background: isMobile ? "#82b8b7" : "unset",
                            py: isMobile ? 3 : 0,
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <div ref={observe}>
                            <Container maxWidth="xl">
                              <DistributionMaps
                                  data={orders}
                                />
                              </Container>
                          </div>
                        </Box>
                      </div>
                    </div>
                  </section> */}
        <Box height={100} />
         <Grid container component="main">
          <Grid
            item
            xs={12}
            md={10}
          >

            <Box
                sx={{
                  height: "100%",
                  paddingY: 3,
                  margin: 5,
                 
                }}
              >
              <MUIDataTable
                title={"DATA PESANAN"}
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
          </Grid>
        </>
      )
}

export default Order;