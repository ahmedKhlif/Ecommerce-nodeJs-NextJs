"use client"
import React from 'react';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
const Loading = () => {
  return (
    <Box class="text-center" sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
}
export default Loading 
