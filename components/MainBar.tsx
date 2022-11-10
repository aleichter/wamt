import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function MainBar(props: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static" 
      elevation={0}
      sx={{background: 'transparent'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box 
            sx={{flexGrow: 1,
            textAlign: 'center'}}>
            <Image alt="Weak Ass Mushroom Tea" width={500} height={39} src="/../public/images/wamt.png" />
          </Box>
          <Button color="inherit">Buy Now</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
