import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel'
import { Typography } from '@mui/material';


const images = [
    {
        label: 'Our debut CD will be released on November 29th!',
        imgPath: '/images/release.png',
        description: 'Set a reminder! Our debut CD will be released on November 29th! Available world wide on all major streaming platforms and for download on iTunes. Also a special VERY limited release of a collector\'s item CD will be available for purchase on our website',
        width: '80vw',
        height: '70vh',
        imgHeight: '60vh',
        minWidth: 100,
        minHeight: 10
    },
    {
        label: 'Weak Ass Mushroom Tea Vol. 1',
        imgPath: '/images/album-vol1.png',
        description: 'Our brand new CD available to purchase (and streaming everywhere) very soon!',
        width: '80vw',
        height: '70vh',
        imgHeight: '60vh',
        minWidth: 100,
        minHeight: 10
    },
    {
        label: 'The band is back together!',
        imgPath: '/images/bandpic.jpg',
        description: 'After a 25 year hiatus the band is back together! Weak Ass Mushroom Tea is proof that time and space is no match for brotherhood and a love of making music. Our debut Album "Volume 1" is set to be released on 11/29/2022!',
        width: '80vw',
        height: '70vh',
        imgHeight: '60vh',
        minWidth: 100,
        minHeight: 10
    },
  ];

  function Item(props: any)
  {
      return (
        <Box style={{width: props.item.width}}>
            <Box sx={{
                margin: 'auto',
                backgroundImage: `url(${props.item.imgPath})`,
                backgroundPosition: 'center',
                backgroundSize:'contain',
                backgroundRepeat:'no-repeat',
                backgroundColor: 'rgba(20,20,20,20.75)',
                width: props.item.width,
                height: props.item.imgHeight,
                minWidth: props.item.minWidth,
                minHeight: props.item.minHeight,
            }}>

            </Box>
            <Box >
                <Typography sx={{
                    background:'rgba(20,20,20,20.75)',
                    width: props.item.width,
                    minWidth: props.item.minWidth,
                    padding: 2
                    }}>{props.item.description}</Typography>
            </Box>
        </Box>
      )
  }

export default function MainContent(props: any) {
    return (
        <Box sx={{
            margin: 'auto',
            width: '80vw'
            }}>
            <Carousel 
            interval={6000}
            indicators={true}
            navButtonsAlwaysVisible={true} 
            sx={{
                position: 'relative',
                backgroundColor: 'transparent'
            }}>
                {
                    images.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Box>
    )
}