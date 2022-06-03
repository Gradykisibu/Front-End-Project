import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pic1 from '../images/1.png'
import pic2 from '../images/2.png'
import pic3 from '../images/3.png'
import pic4 from '../images/4.png'
import pic5 from '../images/5.png'
import Image from 'next/image';

const tailwind = () => {
  return (

    <Container sx={{ borderRadius: '25px ', paddingTop: 100 }}>

      <Box sx={{ bgcolor: ' rgba(13, 23, 42)', borderRadius: '25px' }} >

        <Typography align='center' color="#FFFFF1" variant='h3' sx={{ fontFamily: "arial", fontWeight: '1000', paddingTop: 10, paddingLeft: 15, paddingRight: 15 }}>
          Largest UI components library for Tailwind CSS
        </Typography>
        <Typography align='center' color="#D4DDD3" variant='h6' sx={{ paddingTop: 6, paddingLeft: 5 }}>
          <p>
            The largest set of Tailwind UI components will allow you to find the right design for any purpose. Its components come together seamlessly to give you a solid design.
          </p>
        </Typography>
        <Box align="justify" sx={{ mx: 'auto', paddingLeft: 16, width: '100%' }}>
          <Button align='center' color="secondary" variant='contained' sx={{
            background: '#287842', mx: 'auto', borderRadius: '25px ',
            width: 100,
            p: 1,
            m: 1, fontWeight: '700'
          }}>
            headers
          </Button>
          <Button color="secondary" variant='contained' sx={{
            background: '#287842', mx: 'auto', borderRadius: '25px ',
            width: 100,
            p: 1,
            m: 1, fontWeight: '700'
          }}>
            Navbars
          </Button>
          <Button color="secondary" variant='contained' sx={{
            background: '#287842', mx: 'auto',
            width: 100,
            p: 1, borderRadius: '25px ',
            m: 1, fontWeight: '700'
          }}  >
            Solution
          </Button>
          <Button color="secondary" variant='contained' sx={{
            background: '#287842', mx: 'auto',
            width: 100,
            p: 1, borderRadius: '25px ',
            m: 1, fontWeight: '700'
          }}>
            headers
          </Button>
          <Button color="secondary" variant='contained' sx={{
            background: '#287842', mx: 'auto',
            width: 100,
            p: 1, borderRadius: '25px ',
            m: 1, fontWeight: '700'
          }}>
            Navbars
          </Button>
          <Button color="secondary" variant='contained' sx={{
            background: '#287842', mx: 'auto',
            width: 100,
            p: 1, borderRadius: '25px ',
            m: 1, fontWeight: '700'
          }}  >
            Solution
          </Button>
        </Box>
        <Container sx={{borderRadius:'25px'}}>
          <Image

            src={pic1}
            alt="logo"
            width={300}
            height={300}
            borderRadius={20}
            paddingLeft={5}
          />
          <Image

            src={pic2}
            alt="logo"
            width={300}
            height={300}
            borderRadius={200}
            paddingLeft={5}
          />  <Image

            src={pic3}
            alt="logo"
            width={300}
            height={300}
            borderRadius={200}
          />  <Image

            src={pic4}
            alt="logo"
            width={300}
            height={300}
            borderRadius={200}
          />  <Image

            src={pic5}
            alt="logo"
            width={300}
            height={300}
            borderRadius={200}
          />
        </Container>
        <Container>


          <Typography align='center' color="#FFFFF1" variant='h3' sx={{ fontFamily: "arial", fontWeight: '1000', paddingTop: 10, paddingLeft: 15, paddingRight: 15 }}>

            And we'll give you even more.
          </Typography>
          <Typography align='center' color="#D4DDD3" variant='h6' sx={{ paddingTop: 6, paddingLeft: 5 }}>
            Soon the set of components for landing pages and dashboards will be joined by premium components for e-commerce. You'll get them as an upgrade to your subscription, at no extra cost.
         
          </Typography>
          <Typography align='center' color="#D4DDD3" variant='h6' sx={{ paddingTop: 6, paddingLeft: 5 }}>

            <Button  sx={{ background: '#66ff99', borderRadius: '25px' }}>Try Flex Live</Button>
            <Button color="inherit" variant='outlined' sx={{ borderRadius: '25px' }}>Read more</Button>
          </Typography>
          <Typography align='center' color="#D4DDD3" variant='h6' sx={{ paddingTop: 6, paddingLeft: 5 }}>
            Soon the set of components for landing pages and dashboards will be joined by premium components for e-commerce. You'll get them as an upgrade to your subscription, at no extra cost.
         
          </Typography>
        </Container>
      </Box>

    </Container>
  )
}

export default tailwind