import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Item from '@mui/material/'
import Image from 'next/image';
import banner from '../images/flex-landing-placeholder.png'
import { Tab, Tabs, Container, Grid } from '@mui/material';
let item = "/lnding-pagea/images/flex-landing-placeholder.png";
const Banner = () => {
    return (

        <Container sx= {{ background:"white"}}>

            <Container sx={{ paddingTop: '150px' ,width: '50%', float: 'left'}}>
                <Button color="inherit"variant='outlined' sx={{  borderRadius: '25px' }}>Tailwind</Button>
                <Button color="inherit" variant='outlined' sx={{ borderRadius: '25px' }}>Bootstrap</Button>
                <Button color="inherit" variant='outlined' sx={{  borderRadius: '25px' }}>Bulma soon</Button>
                <Typography variant="h1" component="h2" sx={{fontWeight:"Bold"}}>
                    Flex Your Skills With FlexUI
                    <Typography>
                        We've added the largest UI library,new tools, and we can tell you how we'll integrate WordPress
                    </Typography>
                    <Button color="inherit" sx={{ background: '#66ff99', borderRadius: '25px' }}>Try Flex Live</Button>
                    <Button color="inherit" variant='outlined' sx={{ borderRadius: '25px' }}>Read more</Button>
                </Typography>


            </Container>
            <Container sx={{ width: '50%', float: 'left', paddingTop: '35px',background:'none'  }}>

            <Image
              
              src={banner}
              alt="logo"
              width={1500}
              height={1500}
            />

            </Container>

        </Container>

    )
}

export default Banner