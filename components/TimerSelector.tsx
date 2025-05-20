import React from 'react';
import { Button, Box, Typography } from '@mui/material';

interface TimerSelectorProps {
  onSelect: (mode: 'countdown' | 'stopwatch') => void;
}

const TimerSelector: React.FC<TimerSelectorProps> = ({ onSelect }) => (
  <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
    <Typography variant="h4" sx={{ mb: 2, color: 'primary.main' }}>
      Choose your timer mode
    </Typography>
    <Box display="flex" gap={3}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ borderRadius: 8, boxShadow: 3, px: 4, py: 2 }}
        onClick={() => onSelect('countdown')}
      >
        Countdown Timer
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ borderRadius: 8, boxShadow: 3, px: 4, py: 2 }}
        onClick={() => onSelect('stopwatch')}
      >
        Stopwatch Timer
      </Button>
    </Box>
  </Box>
);

export default TimerSelector; 