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
import Drawer from '@mui/material/Drawer';
import { 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Divider } from '@mui/material';

  import AlbumIcon from '@mui/icons-material/Album';
  import PeopleIcon from '@mui/icons-material/People';
  import HomeIcon from '@mui/icons-material/Home';
  import MailIcon from '@mui/icons-material/Mail';

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
  const [menuState, setState] = React.useState(false)
  const toggleDrawer = (state: boolean) => {
    setState(state)
  }

  const selectHref = (text: string) : string => {
    if (text === "Home") {
      return "/"
    } else if (text === "Contact Us") {
      return "mailto:weakassmushroomtea@gmail.com"
    } else if (text === "About Us") {
      return "/AboutUs"
    } else if (text === "Albums") {
      return "/Albums"
    } else if (text === "Instagram") {
      return "https://www.instagram.com/weakassmushroomtea/"
    } else {
      return "/"
    }
  }

  const selectIcon = (text: string) : React.ReactElement => {
    if (text === "Home") {
      return (
        <HomeIcon />
      )
    } else if (text === "Contact Us") {
      return (
        <MailIcon />
      )
    } else if (text === "About Us") {
      return (
        <PeopleIcon />
      )
    } else if (text === "Albums") {
      return (
        <AlbumIcon />
      )
    } else if (text === "Instagram") {
      return (
        <InstagramIcon />
      )
    } else {
      return (
        <></>
      )
    }
  }

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
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => {
                    toggleDrawer(true)}
                  }
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>


                
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
                <Box display="flex" justifyContent="flex-end">
                  <Link href="https://www.instagram.com/weakassmushroomtea/" target="_blank" rel="noreferrer">
                      <Avatar sx={{ bgcolor: 'grey', marginTop: '10px' }}>
                          <InstagramIcon />
                      </Avatar>
                  </Link>
                </Box>
                <Box display="flex" justifyContent="flex-end" sx={{display: 'none'}}>
                  <Button color="inherit">Buy Now</Button>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        anchor="left"
        open={menuState}
        onClose={() => {
          toggleDrawer(false)
        }}
      >
        <Box
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <List>
            {['Home', 'Albums', 'About Us'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton href={selectHref(text)}>
                  <ListItemIcon>
                    {selectIcon(text)}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Contact Us', 'Instagram'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton href={selectHref(text)} target="_blank">
                  <ListItemIcon>
                    {selectIcon(text)}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
