'use client';

import { Box, Typography, Button, Stack } from '@mui/material';

export default function HomePage() {
  return (
    <Box className="flex items-center justify-center h-screen bg-[#0049b7]">
      <Stack spacing={3} alignItems="center">
        <Typography variant="h4" className="text-center text-[#fff]">
          Welcome to Next.js App Directory Structure!
        </Typography>
        <Button variant="contained" color="secondary">
          Get Started
        </Button>
      </Stack>
    </Box>
  );
}
