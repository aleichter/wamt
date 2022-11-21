import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography'
import Image from 'next/image';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function Bios(props: any) {
    return (
        <Paper sx={{ width: '100%', height: '100%', bgcolor: 'black', padding: '20px'}}>
            <Box sx={{flexGrow: 1}} align="center" >
                <Grid container>
                    <Grid xs={12}>
                        <Grid container>
                            <Grid xs={12} sm={6} style={{padding: 10}}>
                                <Card style={{padding: 10, width: '100%', height:'100%', position:'relative'}}>
                                    <Avatar style={{margin:'auto'}} alt="Art" src="../images/art.png" sx={{ width: 'auto', height:'auto', maxHeight:300, maxWidth:300}}/>
                                    <Typography>Guitar, Vocals</Typography>
                                        <Typography>Art Tantasook</Typography>
                                </Card> 
                            </Grid>
                            <Grid xs={12} sm={6} style={{padding: 10}}>
                                <Card style={{padding: 10, width: '100%', height:'100%'}}>
                                    <Avatar style={{margin:'auto'}} alt="Andrew" src="../images/andrew.png" sx={{ width: 'auto', height:'auto', maxHeight:300, maxWidth:300}}/>
                                    <Typography>Percussion, Keyboards, Guitar, Vocals, Mandolin, Production, Mastering</Typography>
                                        <Typography>Andrew Leichter</Typography>
                                </Card>  
                            </Grid>
                            <Grid xs={12} sm={6} style={{padding: 10}}>
                                    <Card style={{padding: 10, width: '100%', height:'100%'}}>
                                        <Avatar style={{margin:'auto'}} alt="Erik" src="../images/erik.png" sx={{ width: 'auto', height:'auto', maxHeight:300, maxWidth:300}}/>
                                        <Typography>Vocals, Guitar</Typography>
                                        <Typography>Erik Melton</Typography>
                                    </Card>   
                            </Grid>
                            <Grid xs={12} sm={6} style={{padding: 10}}>
                                    <Card style={{padding: 10, width: '100%', height:'100%'}}>
                                        <Avatar style={{margin:'auto'}} alt="Lee" src="../images/lee.png" sx={{ width: 'auto', height:'auto', maxHeight:300, maxWidth:300}}/>
                                        <Typography>Bassist, Guitarist, Vocalist, Harmonica</Typography>
                                        <Typography>Lee Dellapina</Typography>
                                    </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}