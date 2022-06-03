import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const tailwind = () => {
  return (
    
      <Container sx={{borderRadius:'25px ',paddingTop:100}}>

        <Box sx={{ bgcolor: ' rgba(13, 23, 42)', height: '100vh',borderRadius:'25px' }} >
           
           <Typography>
                 LARGEST UI COMPONENTS LIBRARY FOR TAILWIND CSS
           </Typography>
           <Typography>
           The largest set of Tailwind UI components will allow you to find the right design for any purpose. Its components come together seamlessly to give you a solid design.
           </Typography>
           
           <Button  color="inherit" variant='contained' >
               headers
           </Button>
           <Button  color="inherit" variant='contained' >
               headers
           </Button>
           <Button  color="inherit" variant='contained' >
               headers
           </Button>
        </Box>
      </Container>
  )
}

export default tailwind