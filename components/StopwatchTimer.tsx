import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';

interface StopwatchTimerProps {
  onBack: () => void;
}

const StopwatchTimer: React.FC<StopwatchTimerProps> = ({ onBack }) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current!);
  }, [running]);

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  };

  const display = [
    Math.floor(seconds / 3600),
    Math.floor((seconds % 3600) / 60),
    seconds % 60,
  ]
    .map((v) => v.toString().padStart(2, '0'))
    .join(':');

  const percent = (seconds % 3600) / 36; // for a visual effect

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
      <Button onClick={onBack} sx={{ alignSelf: 'flex-start', mb: 2 }}>Back</Button>
      <Typography variant="h5" color="primary">Stopwatch Timer</Typography>
      <Box
        className="ghibli-timer"
        sx={{
          width: 400,
          height: 220,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          left: '-58px',
        }}
      >
        <CircularProgress
          variant="determinate"
          value={percent}
          size={400}
          thickness={5}
          sx={{ color: 'secondary.main', position: 'absolute', left: 80, top: 0 }}
        />
        <Typography
          variant="h3"
          sx={{
            color: '#d2691e',
            fontSize: '5rem',
            zIndex: 1,
            width: '95%',
            textAlign: 'center',
            fontFamily: 'Quicksand, Arial, sans-serif',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textShadow: '0 2px 8px #fffaf3, 0 1px 0 #b97a56',
            position: 'relative',
            left: '27px',
          }}
        >
          {display}
        </Typography>
      </Box>
      <Box display="flex" gap={2}>
        {!running && (
          <Button variant="contained" color="primary" onClick={handleStart}>Start</Button>
        )}
        {running && (
          <Button variant="contained" color="secondary" onClick={handleStop}>Stop</Button>
        )}
        <Button variant="outlined" onClick={handleReset}>Reset</Button>
      </Box>
    </Box>
  );
};

export default StopwatchTimer; 