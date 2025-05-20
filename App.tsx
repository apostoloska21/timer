import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box, Paper } from '@mui/material';
import theme from './theme';
import './styles/ghibli.css';
import TimerSelector from './components/TimerSelector';
import CountdownTimer from './components/CountdownTimer';
import StopwatchTimer from './components/StopwatchTimer';

const App: React.FC = () => {
  const [mode, setMode] = useState<'countdown' | 'stopwatch' | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ background: 'linear-gradient(120deg, #f5f3e7 0%, #e3e0d3 100%)' }}>
        <Paper elevation={6} sx={{ p: 5, borderRadius: 6, minWidth: 540, maxWidth: 650, bgcolor: 'background.paper', boxShadow: '0 4px 24px 0 rgba(125, 168, 123, 0.12)' }} className="ghibli-shadow">
          {mode === null && <TimerSelector onSelect={setMode} />}
          {mode === 'countdown' && <CountdownTimer onBack={() => setMode(null)} />}
          {mode === 'stopwatch' && <StopwatchTimer onBack={() => setMode(null)} />}
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default App;
