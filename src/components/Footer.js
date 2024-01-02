import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="FFC436">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="50px" pt="30px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '120px' }} />
    </Stack>
  </Box>
);

export default Footer;
