import Box from '@mui/material/Box';
import { CardMedia, Typography, Card } from '@mui/material';


const config = {
        label: 'Our debut CD will be released on November 29th!',
        imgPath: '/vol1.mp4',
        description: 'Set a reminder! Our debut CD will be released on November 29th! Available world wide on all major streaming platforms and for download on iTunes. Also a special VERY limited release of a collector\'s item CD will be available for purchase on our website',
        width: '80vw',
        height: '70vh',
        imgHeight: '60vh',
        minWidth: 100,
        minHeight: 10
    };

export default function AlbumsComponent(props: any) {
    return (
        <Box sx={{
            margin: 'auto',
            width: '80vw'
            }}>

            <Card style={{width: config.width}}>
                <CardMedia 
                    component="video"
                    controls 
                    src={config.imgPath}
                    sx={{
                        margin: 'auto',
                        backgroundImage: `url(${config.imgPath})`,
                        backgroundPosition: 'center',
                        backgroundSize:'contain',
                        backgroundRepeat:'no-repeat',
                        backgroundColor: 'rgba(20,20,20,20.75)',
                        width: config.width,
                        height: config.imgHeight,
                        minWidth: config.minWidth,
                        minHeight: config.minHeight,
                    }}
                >

                </CardMedia>
                <Box >
                    <Typography sx={{
                        background:'rgba(20,20,20,20.75)',
                        width: config.width,
                        minWidth: config.minWidth,
                        padding: 2
                        }}>{config.description}</Typography>
                </Box>
            </Card>
        </Box>
    )
}