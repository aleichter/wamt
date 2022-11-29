import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Bios from '../components/Bios';
import Link from '@mui/material/Link';
import AlbumVol1Launch from '../components/AlbumVol1Launch';
import MainBar from '../components/MainBar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import { ThemeProvider } from '@mui/material/styles'
import { themeOptions } from '../components/Theme';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from '../styles/Home.module.css';
import Grid from '@mui/material/Grid';
import Script from 'next/script';

export default function Home() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CRQR7VLSF5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CRQR7VLSF5');
        `}
      </Script>
      <Paper className={styles.mainBackground}>
        <Grid container>
          <Grid xs={12}>
            <MainBar />
            <Link id="back-to-top-anchor" />
          </Grid>
          <Grid xs={12} style={{height:'fit-conent', minHeight:'100vh'}}>
            <Box style={{height:'70px'}}></Box>
            <AlbumVol1Launch/>
          </Grid>
          <Grid xs={12} >
              <Bios />
          </Grid>
          <Grid xs={12} style={{height:'15vh'}}>
              <Footer />
              <ScrollTop >
                <Fab size="small" aria-label="scroll back to top">
                  <KeyboardArrowUpIcon />
                </Fab>
              </ScrollTop>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}
