import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Footer(props: any) {
    return (
        <Box
            style={{
                backgroundColor: 'rgb(30,30,30)',
                height:'100%',
                display:'flex',
                flexDirection:'column'
            }}>
            <Button
            variant="contained"
            size="large"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:weakassmushroomtea@gmail.com`}
            sx={{
                m:1
            }}
            >
                <Typography variant="button" style={{ fontSize: '0.69rem' }}>
                    Contact Us
                </Typography>
            </Button>
            <Typography sx={{
                m:1
            }}>Copyright © 2022 Weak Ass Mushroom Tea All rights reserved.</Typography>
        </Box>
    )
}