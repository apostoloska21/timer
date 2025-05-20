import React from 'react';
import { Box, Typography } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const GhibliAnimation: React.FC<{ message: string }> = ({ message }) => (
  <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
    <SpaIcon sx={{ fontSize: 80, color: 'primary.main' }} className="ghibli-animation" />
    <Typography variant="h4" color="primary" mt={2}>
      {message}
    </Typography>
    <Typography variant="body1" color="text.secondary" mt={1}>
      Take a deep breath and enjoy a break!
    </Typography>
  </Box>
);

export default GhibliAnimation; 