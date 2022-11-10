import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const images = [
    {
        label: 'Our debut CD will be released on November 29th!',
        imgPath:
            '../images/release.png',
        description: 'Set a reminder! Our debut CD will be released on November 29th! Available world wide on all major streaming platforms and for download on iTunes. Also a special VERY limited release of a collector\'s item CD will be available for purchase on our website'
    },
    {
        label: 'Weak Ass Mushroom Tea Vol. 1',
        imgPath:
            '../images/album-vol1.png',
        description: 'Our brand new CD available to purchase (and streaming everywhere) very soon!'
    },
    {
        label: 'The band is back together!',
        imgPath:
            '../images/bandpic.jpg',
            description: 'After a 25 year hiatus the band is back together! Weak Ass Mushroom Tea is proof that time and space is no match for brotherhood and a love of making music. Our debut Album "Volume 1" is set to be released on 11/29/2022!'
    },
  ];

  const styles = {
    media: {
      backgroundPosition: 'top',
      height: 0,
      paddingTop: '70vh', // 16:9,
      marginTop:'30',

    }
  };

  function Item(props: any)
  {
      return (
        <Card 
            sx={{
            maxWidth: 764,
            height: '80vh',
            margin: 'auto',
            boxShadow: 3,
        }}>
            <CardMedia
                    image={props.item.imgPath}
                    title={props.item.label}
                    style={styles.media}
            >
            </CardMedia>
            <Typography sx={{padding: 1}}>{props.item.description}</Typography>
            
        </Card>
      )
  }

export default function MainContent(props: any) {
    return (
        <Box sx={{ flexGrow: 1}}>
            <Carousel 
            interval={6000}
            indicators={true}
            navButtonsAlwaysVisible={true} 
            sx={{
                maxWidth:764,
                margin: 'auto',
            }}>
                {
                    images.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            <Grid container>
                <Grid xs={6}>
                    <Link href="https://www.instagram.com/weakassmushroomtea/" target="_blank" rel="noreferrer">
                        <Avatar sx={{ bgcolor: 'grey', margin: 2 }}>
                            <InstagramIcon />
                        </Avatar>
                    </Link>
                </Grid>
                <Grid xs={6} style={{textAlign: 'right'}}>
                    <Typography style={{padding: 10}}>Scroll Down</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}