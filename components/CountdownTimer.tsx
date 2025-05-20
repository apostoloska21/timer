import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Typography, TextField, CircularProgress } from '@mui/material';
import GhibliAnimation from './GhibliAnimation';

interface CountdownTimerProps {
  onBack: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ onBack }) => {
  const [input, setInput] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    } else if (remaining === 0 && running) {
      setRunning(false);
      setFinished(true);
    }
    return () => clearInterval(intervalRef.current!);
  }, [running, remaining]);

  const handleStart = () => {
    if (!input) return;
    const [h = '0', m = '0', s = '0'] = input.split(':');
    const total = parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s);
    setSeconds(total);
    setRemaining(total);
    setRunning(true);
    setFinished(false);
  };

  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setRemaining(seconds);
    setFinished(false);
  };

  const percent = seconds ? (remaining / seconds) * 100 : 0;
  const display = [
    Math.floor(remaining / 3600),
    Math.floor((remaining % 3600) / 60),
    remaining % 60,
  ]
    .map((v) => v.toString().padStart(2, '0'))
    .join(':');

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
      <Button onClick={onBack} sx={{ alignSelf: 'flex-start', mb: 2 }}>Back</Button>
      <Typography variant="h5" color="primary">Countdown Timer</Typography>
      <Box
        className="ghibli-timer"
        sx={{
          width: 260,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          left: '-42px',
        }}
      >
        <CircularProgress
          variant="determinate"
          value={percent}
          size={180}
          thickness={6}
          sx={{ color: 'primary.main', position: 'absolute', left: 80, top: -1 }}
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
            left: '-60px',

          }}
        >
          {display}
        </Typography>
      </Box>
      {!running && !finished && (
        <TextField
          label="Set Time (hh:mm:ss)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          variant="outlined"
          sx={{ mb: 2 }}
        />
      )}
      <Box display="flex" gap={2}>
        {!running && !finished && (
          <Button variant="contained" color="primary" onClick={handleStart}>Start</Button>
        )}
        {running && (
          <Button variant="contained" color="secondary" onClick={handleStop}>Stop</Button>
        )}
        {!running && seconds > 0 && (
          <Button variant="outlined" onClick={handleReset}>Reset</Button>
        )}
      </Box>
      {finished && <GhibliAnimation message="Time's up!" />}
    </Box>
  );
};

export default CountdownTimer; 