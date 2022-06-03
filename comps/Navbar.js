import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';

import mypic from '../images/logo-shuffle-full-dark.svg'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{ background: "none", boxShadow: 'none', fontWeight: 700 }}>

        <Toolbar variant="dense">
          <Typography >
            <Image
              
              src={mypic}
              alt="logo"
              width={200}
              height={50}
            />
          </Typography>

          <Tabs >
            <Tab label="Products" />
            <Tab label="How it Works" />
            <Tab label="Pricing " />
            <Tab label="About" />
          </Tabs>
          <Tabs>
            <Tab label="Login" />
          </Tabs>
          <Button color="inherit" variant='contained' sx={{ background: '#000001', borderRadius: '25px' }}>Try Demo</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
