import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography'
import Image from 'next/image';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid'; 
import Avatar from '@mui/material/Avatar';

export default function Bios(props: any) {
    return (
        <Paper sx={{ width: '100%', height: '100%', bgcolor: 'black', padding: '20px'}}>
            <Box sx={{flexGrow: 1}} align="center" >
                <Grid container>
                    <Grid xs={12}>
                        <Image alt="Meet The Band" width={254} height={35} src="/../images/meettheband.png" />
                    </Grid>
                    <Grid
                        xs={6}>
                        <Card style={{padding: 10, height: 400}}>
                            <Avatar style={{margin:'auto'}} alt="Art" src="../images/art.png" sx={{width:300,height:300}}/>
                            <Typography>Our lead guitarist and vocalist, Art Tantasook</Typography>
                        </Card> 
                    </Grid>
                    <Grid xs={6}> 
                        <Card style={{padding: 10, height: 400}}>
                            <Avatar style={{margin:'auto'}} alt="Andrew" src="../images/andrew.png" sx={{width:300,height:300}}/>
                            <Typography>He played #Percussion. #Keyboards. #Guitar. #Vocals. #Mandolin! And he PRODUCED and mastered the album too!! The Uber-talented Andrew Leichter</Typography>
                        </Card>  
                    </Grid>
                    <Grid xs={6}>   
                        <Card style={{padding: 10, height: 400}}>
                            <Avatar style={{margin:'auto'}} alt="Erik" src="../images/erik.png" sx={{width:300,height:300}}/>
                            <Typography>Vocalist, guitarist Erik Melton</Typography>
                        </Card>   
                    </Grid>
                    <Grid xs={6}>
                        <Card style={{padding: 10, height: 400}}>
                            <Avatar style={{margin:'auto'}} alt="Lee" src="../images/lee.png" sx={{width:300,height:300}}/>
                            <Typography>Our bassist, guitarist, vocalist, and occasional harmonica player, Lee Dellapina</Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}