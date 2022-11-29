import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';
import Image from 'next/image';

const config = {
        label: 'Our debut CD will be released on November 29th!',
        imgPath: '/images/bandpic.jpg',
        description: 'Set a reminder! Our debut CD will be released on November 29th! Available world wide on all major streaming platforms and for download on iTunes. Also a special VERY limited release of a collector\'s item CD will be available for purchase on our website',
        width: '80vw',
        height: '70vh',
        imgHeight: '60vh',
        minWidth: 100,
        minHeight: 10
    };

export default function BandBio(props: any) {
    return (
        <Box sx={{
            margin: 'auto',
            width: '80vw'
            }}>

            <Box style={{width: config.width}}>
                <Box sx={{
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
                }}>

                </Box>
                <Box sx={{
                    background:'rgba(20,20,20,20.75)',
                    width: config.width,
                    minWidth: config.minWidth,
                    padding: 2
                    }}>
                        <Typography className='paragraph'>
                            Nearly 30 years ago the guys in Weak Ass Mushroom Tea formed a band in their hometown of Lexington, KY. They had some fun, wrote some cool tunes, and released one album under the name The Down in 1997, but like most local bands, the fun was short lived, and the guys went their separate ways.
                        </Typography>
                        <Typography className='paragraph'>
                            Life happened. Families and jobs transported each member to a different part of the country. From Seattle to Chicago to Georgia and Kentucky, the guys were separated by time and distance, and had mostly lost touch with each other. 
                        </Typography>
                        <Typography className='paragraph'>
                            But in 2020, during the lock-down, they reconnected via a group text, and started catching up. Then, in early 2022, to mark the 25th anniversary of their original CD release, they reconvened in Lexington for an epic weekend of rock music. For two days they relived “the good old days,” staying up all night, sharing stories, and playing music. It was like no time had passed at all.  
                        </Typography>
                        <Grid container sx={{width: '100%', justifyContent: 'center' }}>
                            <Grid item xs={12} md={6}>
                                <Image
                                    width={160}
                                    height={203}
                                    src="/images/yesterday.jpeg"
                                    alt="Band Today"/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Image
                                    width={275}
                                    height={203}
                                    src="/images/today.jpeg"
                                    alt="Band Today" />                                        
                            </Grid>
                        </Grid>
                        <Typography className='paragraph'>
                            When the weekend was over, the guys vowed not to let another 30 years go by, and started writing music together again. They shared files online with their individual parts, and mixed them together to create new songs. After a few successful attempts at writing new music, the decision was made to make a full length album, and Weak Ass Mushroom Tea was born. 
                        </Typography>
                        <Typography className='paragraph'>
                            The entire album was recorded remotely, with none of the members having played even a single note together in person.
                        </Typography>
                        <Typography className='paragraph'>
                            Over the years, each member of the band has grown and matured musically. They each developed their own individual style which would be distinctive from the others, resulting in a dramatically diverse album featuring a wide rage of musical genres. 
                        </Typography>
                        <Typography className='paragraph'>
                            With four song writers and four lead singers, Weak Ass Mushroom Tea Vol. 1 has elements of rock, punk, country, bluegrass, Americana, pop, and funk. 
                        </Typography>
                        <Typography className='paragraph'>
                            Released on November 29, 2022 Weak Ass Mushroom Tea Volume 1 is available streaming world wide on all major streaming platforms, while the guys are already hard at work writing and recording Volume 2. 
                        </Typography>
                </Box>
            </Box>
        </Box>
    )
}