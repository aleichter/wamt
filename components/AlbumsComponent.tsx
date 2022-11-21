import Box from '@mui/material/Box';
import { CardMedia, Typography, Card } from '@mui/material';
import YoutubeEmbed from '../components/YouTubeEmbed';

const config = {
        label: 'Our debut CD will be released on November 29th!',
        imgPath: 'https://www.youtube.com/embed/RulWZhxGZfE',
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
                <YoutubeEmbed embedId="RulWZhxGZfE" />
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