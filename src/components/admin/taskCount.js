import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Container, Typography, Grid } from '@mui/material';

function TaskCount() {
  const [todos, setTodos] = useState({ notCompleted: [], completed: [] });

  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/task');
        const { notCompleted, completed } = response.data;
        setTodos({ notCompleted, completed });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTaskData();
  }, []); // Empty dependency array to run the effect only once

  const notCompletedBoxStyle = { backgroundColor: 'lightcoral', padding: '10px', margin: '10px' };
  const completedBoxStyle = { backgroundColor: 'lightgreen', padding: '10px', margin: '10px' };

  return (
    <>
    <Grid container component="main">
    <Grid
            item
            xs={12}
            md={6}
           
          >
    <Card sx={{ minWidth: 275 }} style={notCompletedBoxStyle}>
      <CardContent>
        <Typography  variant="h3" component="div">
        {todos.notCompleted}
        </Typography>
        <Typography  variant="h4" component="div">
        Belum Selesai
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid
            item
            xs={12}
            md={6}
           
          >
     <Card sx={{ minWidth: 275 }} style={completedBoxStyle} >
      <CardContent >
        <Typography  variant="h3" component="div">
        {todos.completed}
        </Typography>
        <Typography  variant="h4" component="div">
        Selesai
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </>
  );
}

export default TaskCount;
