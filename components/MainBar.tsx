import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Grid from '@mui/material/Grid';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

function HideOnScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function MainBar(props: any) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HideOnScroll>
        <AppBar 
        position="fixed" 
        elevation={0}
        sx={{background:'rgba(0,0,0,0.5)'}}>
          <Toolbar>
            <Grid container>
              <Grid xs={3}>
                <Link href="https://www.instagram.com/weakassmushroomtea/" target="_blank" rel="noreferrer">
                    <Avatar sx={{ bgcolor: 'grey', marginTop: '10px' }}>
                        <InstagramIcon />
                    </Avatar>
                </Link>
              </Grid>
              <Grid xs={6}>
                <Box sx={{height: 1, width: 1}}
                position="relative">
                  <Image alt="Weak Ass Mushroom Tea" 
                      fill 
                      src="/wamt.png" />
                </Box>
              </Grid>
              <Grid xs={3}>
                <Box display="flex" justifyContent="flex-end" sx={{display: 'none'}}>
                  <Button color="inherit">Buy Now</Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}
