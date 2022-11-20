import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Bios from '../components/Bios';
import Link from '@mui/material/Link';
import MainContent from '../components/MainContent';
import MainBar from '../components/MainBar';
import ScrollTop from '../components/ScrollTop';
import { ThemeProvider } from '@mui/material/styles'
import { themeOptions } from '../components/Theme';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from '../styles/Home.module.css';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <ThemeProvider theme={themeOptions}>
      <Paper className={styles.mainBackground}>
        <Grid container>
          <Grid xs={12}>
            <MainBar />
            <Link id="back-to-top-anchor" />
          </Grid>
          <Grid xs={12} style={{height:'fit-conent', minHeight:'100vh'}}>
            <Box style={{height:'70px'}}></Box>
            <MainContent/>
          </Grid>
          <Grid xs={12} style={{height:'100vh'}}>
              <Bios />
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
